import type { Plugin } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, watch } from 'fs';
import { join, dirname } from 'path';

const STORYBOOK_VARIANT_SUFFIX_PATTERN = /--\w+$/g;

function getBaseStoryId(storyId: string): string {
  return storyId.replace(STORYBOOK_VARIANT_SUFFIX_PATTERN, '');
}

function findStoryFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      findStoryFiles(filePath, fileList);
    } else if (file.endsWith('.stories.tsx') || file.endsWith('.stories.ts')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function extractDefaultArgs(storyContent: string): Record<string, any> {
  const defaultArgsMatch = storyContent.match(/const\s+defaultArgs\s*=\s*\{([\s\S]*?)\}/);
  if (!defaultArgsMatch) return {};
  
  const defaultArgsContent = defaultArgsMatch[1];
  const args: Record<string, any> = {};
  
  // Simple parser for object properties
  const propPattern = /(\w+):\s*([^,}]+)/g;
  let match;
  while ((match = propPattern.exec(defaultArgsContent)) !== null) {
    const key = match[1].trim();
    let value = match[2].trim();
    
    // Remove trailing comma
    value = value.replace(/,$/, '').trim();
    
    // Parse different value types
    if (value === 'true') args[key] = true;
    else if (value === 'false') args[key] = false;
    else if (value === 'null') args[key] = null;
    else if (value === 'undefined') args[key] = undefined;
    else if (/^['"](.*)['"]$/.test(value)) {
      // String value
      args[key] = value.slice(1, -1);
    } else if (/^\d+$/.test(value)) {
      // Number
      args[key] = Number(value);
    } else if (value.startsWith('fn()')) {
      // Function - skip for code generation
      continue;
    } else if (value.includes('as const')) {
      // Type assertion - extract the value
      const constMatch = value.match(/['"]([^'"]+)['"]\s+as\s+const/);
      if (constMatch) args[key] = constMatch[1];
    } else {
      // Keep as string for now
      args[key] = value;
    }
  }
  
  return args;
}

function extractJSXFromChildren(storyContent: string, storyBody: string): string | null {
  // Look for children: (JSX) pattern - need to match balanced parentheses
  const childrenStartPattern = /children:\s*\(/;
  const childrenStartMatch = storyBody.match(childrenStartPattern);
  
  if (childrenStartMatch) {
    const startIndex = childrenStartMatch.index! + childrenStartMatch[0].length;
    let parenCount = 1;
    let i = startIndex;
    let inString = false;
    let stringChar = '';
    
    while (i < storyBody.length && parenCount > 0) {
      const char = storyBody[i];
      const prevChar = i > 0 ? storyBody[i - 1] : '';
      
      if (!inString && (char === '"' || char === "'")) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        inString = false;
      } else if (!inString) {
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
      i++;
    }
    
    if (parenCount === 0) {
      const jsxContent = storyBody.substring(startIndex, i - 1).trim();
      if (jsxContent.startsWith('<') || jsxContent.startsWith('<>')) {
        return jsxContent;
      }
    }
  }
  
  // Look for children: JSX (without parentheses) - match until next property or closing brace
  const childrenMatch2 = storyBody.match(/children:\s*([\s\S]*?)(?=\n\s*\w+:|,\s*$|\n\s*\})/);
  if (childrenMatch2) {
    const childrenValue = childrenMatch2[1].trim();
    // Check if it's JSX (starts with < or <>)
    if (childrenValue.startsWith('<') || childrenValue.startsWith('<>')) {
      // Remove trailing comma if present
      return childrenValue.replace(/,\s*$/, '').trim();
    }
  }
  
  return null;
}

function extractRenderFunction(storyBody: string): string | null {
  // Look for render: () => (JSX) pattern - need to match balanced parentheses
  const renderStartPattern = /render:\s*\(\)\s*=>\s*\(/;
  const renderStartMatch = storyBody.match(renderStartPattern);
  
  if (renderStartMatch) {
    const startIndex = renderStartMatch.index! + renderStartMatch[0].length;
    let parenCount = 1;
    let i = startIndex;
    let inString = false;
    let stringChar = '';
    
    while (i < storyBody.length && parenCount > 0) {
      const char = storyBody[i];
      const prevChar = i > 0 ? storyBody[i - 1] : '';
      
      if (!inString && (char === '"' || char === "'")) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        inString = false;
      } else if (!inString) {
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
      i++;
    }
    
    if (parenCount === 0) {
      const jsxContent = storyBody.substring(startIndex, i - 1).trim();
      if (jsxContent.startsWith('<')) {
        return jsxContent;
      }
    }
  }
  
  // Look for render: () => JSX (without parentheses)
  const renderMatch2 = storyBody.match(/render:\s*\(\)\s*=>\s*([\s\S]*?)(?=\n\s*\w+:|,\s*$|\n\s*\})/);
  if (renderMatch2) {
    const renderValue = renderMatch2[1].trim();
    // Check if it's JSX (starts with <)
    if (renderValue.startsWith('<')) {
      // Remove trailing comma if present
      return renderValue.replace(/,\s*$/, '').trim();
    }
  }
  
  return null;
}

function extractStoryArgs(storyContent: string, storyName: string, defaultArgs: Record<string, any>): Record<string, any> {
  // Find the story definition - look for export const StoryName: Story = {
  const storyStartPattern = new RegExp(`export\\s+const\\s+${storyName}:\\s*Story\\s*=\\s*\\{`);
  const storyStartIndex = storyContent.search(storyStartPattern);
  
  if (storyStartIndex === -1) return defaultArgs;
  
  // Find the matching closing brace for the story object
  let braceCount = 0;
  let inString = false;
  let stringChar = '';
  let inTemplate = false;
  let i = storyStartIndex;
  
  // Find the opening brace
  while (i < storyContent.length && storyContent[i] !== '{') i++;
  if (i >= storyContent.length) return defaultArgs;
  
  braceCount = 1;
  i++;
  
  // Find the matching closing brace
  while (i < storyContent.length && braceCount > 0) {
    const char = storyContent[i];
    const prevChar = i > 0 ? storyContent[i - 1] : '';
    
    if (!inString && !inTemplate && (char === '"' || char === "'")) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar && prevChar !== '\\') {
      inString = false;
    } else if (!inString && char === '`') {
      inTemplate = !inTemplate;
    } else if (!inString && !inTemplate) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
    }
    i++;
  }
  
  if (braceCount !== 0) return defaultArgs;
  
  const storyBody = storyContent.substring(storyStartIndex, i);
  const args: Record<string, any> = { ...defaultArgs };
  
  // Check for render function first (takes precedence)
  const renderJSX = extractRenderFunction(storyBody);
  if (renderJSX) {
    args._renderJSX = renderJSX;
    return args;
  }
  
  // Extract args
  const argsMatch = storyBody.match(/args:\s*\{([\s\S]*?)\}/);
  
  if (argsMatch) {
    const argsContent = argsMatch[1];
    
    // Extract JSX children if present
    const childrenJSX = extractJSXFromChildren(storyContent, storyBody);
    if (childrenJSX) {
      args._childrenJSX = childrenJSX;
    }
    
    // Extract simple args
    const lines = argsContent.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      // Skip empty lines, comments, spread operators, and children (handled separately)
      if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('...') || trimmed.startsWith('children:')) continue;
      
      // Match key: value pattern (simple cases)
      const keyValueMatch = trimmed.match(/^(\w+):\s*(.+?)(?:,\s*)?$/);
      if (keyValueMatch) {
        const key = keyValueMatch[1];
        let value = keyValueMatch[2].trim();
        
        // Remove trailing comma
        value = value.replace(/,$/, '').trim();
        
        // Skip if it's a complex expression we can't parse (but not JSX)
        if ((value.includes('{') || value.includes('[') || value.includes('fn()')) && !value.startsWith('<')) {
          continue;
        }
        
        args[key] = parseValue(value);
      }
    }
  }
  
  return args;
}

function parseValue(value: string): any {
  if (!value) return undefined;
  
  value = value.trim();
  
  // Boolean
  if (value === 'true') return true;
  if (value === 'false') return false;
  
  // Null/undefined
  if (value === 'null') return null;
  if (value === 'undefined') return undefined;
  
  // String
  if ((value.startsWith('"') && value.endsWith('"')) || 
      (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  
  // Number
  if (/^-?\d+$/.test(value)) return Number(value);
  if (/^-?\d+\.\d+$/.test(value)) return Number(value);
  
  // Type assertion with 'as const'
  const constMatch = value.match(/['"]([^'"]+)['"]\s+as\s+const/);
  if (constMatch) return constMatch[1];
  
  // Function calls - return undefined to skip
  if (value.includes('fn()')) return undefined;
  
  // Return as string for complex expressions
  return value;
}

function formatJSX(jsx: string, indent: number = 2): string {
  // Basic JSX formatting - add indentation
  const indentStr = ' '.repeat(indent);
  const lines = jsx.split('\n');
  return lines
    .map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      // Don't add extra indent to first line if it's already indented
      if (index === 0 && trimmed.startsWith('<')) {
        return trimmed;
      }
      return indentStr + trimmed;
    })
    .filter(line => line.length > 0)
    .join('\n');
}

function generateCodeExample(componentName: string, args: Record<string, any>): string {
  // Check for render function JSX (takes precedence)
  if (args._renderJSX) {
    return formatJSX(args._renderJSX, 0);
  }
  
  // Filter out function props, undefined values, and internal props
  const propsToInclude = Object.entries(args)
    .filter(([key, value]) => {
      // Exclude internal keys
      if (key.startsWith('_')) return false;
      // Exclude undefined/null values
      if (value === undefined || value === null) return false;
      // Exclude function handlers (except onClick which might be useful)
      if (key.startsWith('on') && key !== 'onClick') return false;
      // Exclude specific handlers
      if (key === 'onDismiss') return false;
      // Exclude children (handled separately)
      if (key === 'children') return false;
      return true;
    });
  
  const propsString = propsToInclude
    .map(([key, value]) => {
      if (typeof value === 'string') {
        // Escape quotes in strings
        const escapedValue = value.replace(/"/g, '&quot;');
        return `${key}="${escapedValue}"`;
      } else if (typeof value === 'boolean') {
        return value ? key : `${key}={false}`;
      } else if (typeof value === 'number') {
        return `${key}={${value}}`;
      } else {
        // For other types, use JSX expression
        return `${key}={${JSON.stringify(value)}}`;
      }
    })
    .filter(Boolean)
    .join(' ');
  
  const hasProps = propsString.length > 0;
  
  // Check for JSX children
  if (args._childrenJSX) {
    const formattedChildren = formatJSX(args._childrenJSX, 2);
    if (hasProps) {
      return `<${componentName} ${propsString}>\n${formattedChildren}\n</${componentName}>`;
    } else {
      return `<${componentName}>\n${formattedChildren}\n</${componentName}>`;
    }
  }
  
  // Check for string children
  const children = args.children;
  if (children !== undefined && children !== null && children !== '') {
    if (typeof children === 'string') {
      if (hasProps) {
        return `<${componentName} ${propsString}>\n  ${children}\n</${componentName}>`;
      } else {
        return `<${componentName}>\n  ${children}\n</${componentName}>`;
      }
    }
  }
  
  if (hasProps) {
    return `<${componentName} ${propsString} />`;
  } else {
    return `<${componentName} />`;
  }
}

function generateMarkdownFromStory(
  storyPath: string,
  componentName: string,
  stories: Array<{ name: string; description?: string; args?: Record<string, any> }>
): string {
  const storyContent = readFileSync(storyPath, 'utf-8');
  
  // Extract component name from meta
  const componentMatch = storyContent.match(/component:\s*(\w+)/);
  const actualComponentName = componentMatch ? componentMatch[1] : componentName;
  
  // Extract defaultArgs if present
  const defaultArgs = extractDefaultArgs(storyContent);
  
  let componentDescription = '';
  const metaMatch = storyContent.match(/const\s+meta[\s\S]*?=/);
  if (metaMatch) {
    const beforeMeta = storyContent.substring(0, storyContent.indexOf(metaMatch[0]));
    const jsdocMatch = beforeMeta.match(/\/\*\*[\s\S]*?\*\//);
    if (jsdocMatch) {
      componentDescription = jsdocMatch[0]
        .replace(/\/\*\*|\*\/|\*/g, '')
        .trim()
        .split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .join('\n');
    }
  }

  let markdown = `# ${componentName}\n\n`;

  if (componentDescription) {
    markdown += `${componentDescription}\n\n`;
  }

  const argTypesMatch = storyContent.match(/argTypes:\s*\{([\s\S]*?)\}/);
  if (argTypesMatch) {
    markdown += `## Props\n\n`;
    const argTypesContent = argTypesMatch[1];
    const propMatches = argTypesContent.match(/(\w+):\s*\{[\s\S]*?\}/g) || [];
    if (propMatches.length > 0) {
      propMatches.forEach((propMatch) => {
        const propNameMatch = propMatch.match(/(\w+):/);
        if (propNameMatch) {
          const propName = propNameMatch[1];
          markdown += `- **${propName}**: See Storybook controls for details\n`;
        }
      });
      markdown += '\n';
    } else {
      markdown += `See Storybook controls for interactive prop documentation.\n\n`;
    }
  }

  if (stories.length > 0) {
    markdown += `## Stories\n\n`;
    stories.forEach((story) => {
      markdown += `### ${story.name}\n\n`;
      if (story.description) {
        markdown += `${story.description}\n\n`;
      }
      
      // Generate code example
      const storyArgs = story.args || extractStoryArgs(storyContent, story.name, defaultArgs);
      const codeExample = generateCodeExample(actualComponentName, storyArgs);
      markdown += `\`\`\`tsx\n${codeExample}\n\`\`\`\n\n`;
    });
  }

  return markdown;
}

function generateAllMarkdownFiles(projectRoot: string, outputDir: string) {
  const srcDir = join(projectRoot, 'src');

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const storyFiles = findStoryFiles(srcDir);
  const storyMap = new Map<string, { path: string; componentName: string; stories: Array<{ name: string; description?: string }> }>();

  for (const storyFile of storyFiles) {
    try {
      const content = readFileSync(storyFile, 'utf-8');
      
      const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
      if (!titleMatch) continue;

      const componentName = titleMatch[1];
      const baseStoryId = getBaseStoryId(componentName.toLowerCase().replace(/\s+/g, '-'));

      const storyPattern = /\/\*\*([\s\S]*?)\*\/\s*export\s+const\s+(\w+):\s*Story\s*=\s*\{/g;
      const stories: Array<{ name: string; description?: string; args?: Record<string, any> }> = [];
      let match;
      
      // Extract defaultArgs for this file
      const defaultArgs = extractDefaultArgs(content);
      
      while ((match = storyPattern.exec(content)) !== null) {
        const description = match[1]
          .replace(/\*/g, '')
          .trim()
          .split('\n')
          .map(line => line.trim())
          .filter(line => line)
          .join(' ');
        const name = match[2];
        const args = extractStoryArgs(content, name, defaultArgs);
        stories.push({ name, description: description || undefined, args });
      }
      
      const simpleStoryPattern = /export\s+const\s+(\w+):\s*Story\s*=/g;
      const allStoryNames = new Set(stories.map(s => s.name));
      
      while ((match = simpleStoryPattern.exec(content)) !== null) {
        const name = match[1];
        if (!allStoryNames.has(name)) {
          const args = extractStoryArgs(content, name, defaultArgs);
          stories.push({ name, description: undefined, args });
        }
      }

      if (storyMap.has(baseStoryId)) {
        const existing = storyMap.get(baseStoryId)!;
        existing.stories.push(...stories);
      } else {
        storyMap.set(baseStoryId, {
          path: storyFile,
          componentName,
          stories,
        });
      }
    } catch (error) {
      console.error(`Error processing ${storyFile}:`, error);
    }
  }

  for (const [baseStoryId, storyData] of storyMap.entries()) {
    const markdown = generateMarkdownFromStory(
      storyData.path,
      storyData.componentName,
      storyData.stories
    );

    const outputDirForStory = join(outputDir, dirname(baseStoryId));
    if (!existsSync(outputDirForStory)) {
      mkdirSync(outputDirForStory, { recursive: true });
    }

    const outputPath = join(outputDir, `${baseStoryId}.txt`);
    writeFileSync(outputPath, markdown, 'utf-8');
  }

  return storyMap.size;
}

export function markdownGeneratorPlugin(): Plugin {
  let projectRoot: string;
  let outputDir: string;
  let watcher: ReturnType<typeof watch> | null = null;

  return {
    name: 'storybook-markdown-generator',
    configResolved(config) {
      projectRoot = config.root;
      outputDir = join(projectRoot, 'storybook-static/llms');
    },
    configureServer(server) {
      // Generate markdown files on server start
      const count = generateAllMarkdownFiles(projectRoot, outputDir);
      console.log(`📝 Generated ${count} markdown files for dev mode`);

      // Watch for story file changes
      const srcDir = join(projectRoot, 'src');
      watcher = watch(srcDir, { recursive: true }, (eventType, filename) => {
        if (filename && (filename.endsWith('.stories.tsx') || filename.endsWith('.stories.ts'))) {
          console.log(`🔄 Regenerating markdown files...`);
          generateAllMarkdownFiles(projectRoot, outputDir);
        }
      });

      // Serve markdown files from /llms/ path
      server.middlewares.use('/llms', (req, res, next) => {
        const url = req.url;
        if (url && url.endsWith('.txt')) {
          const fileName = url.replace(/^\//, '');
          const filePath = join(outputDir, fileName);
          
          try {
            // Regenerate if file doesn't exist (on-demand generation)
            if (!existsSync(filePath)) {
              generateAllMarkdownFiles(projectRoot, outputDir);
            }
            
            if (existsSync(filePath)) {
              const content = readFileSync(filePath, 'utf-8');
              res.setHeader('Content-Type', 'text/plain; charset=utf-8');
              res.end(content);
              return;
            } else {
              res.statusCode = 404;
              res.end('Markdown file not found');
              return;
            }
          } catch (error) {
            console.error(`Error serving ${filePath}:`, error);
            res.statusCode = 500;
            res.end('Error generating markdown');
            return;
          }
        }
        next();
      });
    },
    closeBundle() {
      // Generate markdown files after bundles are written (during build)
      // This ensures the output directory exists
      const count = generateAllMarkdownFiles(projectRoot, outputDir);
      console.log(`📝 Generated ${count} markdown files for build`);
    },
    buildEnd() {
      if (watcher) {
        watcher.close();
      }
    },
  };
}


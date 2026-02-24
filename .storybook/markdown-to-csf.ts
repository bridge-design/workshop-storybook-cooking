import { load as yamlLoad } from 'js-yaml';
import frontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import unified from 'unified';
import type { Plugin } from 'vite';

// Type definitions
interface ASTNode {
  type: string;
  value?: string;
  depth?: number;
  children?: ASTNode[];
}

interface TextNode extends ASTNode {
  type: 'text';
  value: string;
}

interface FrontmatterYAML {
  title?: string | null;
  kind?: string | null;
  category?: string | null;
  lastUpdated?: string | null;
}

// Markdown processor
const processor = unified()
  .use(remarkParse, {})
  .use(frontmatter, ['yaml']);

// Helper functions
/** Extracts YAML frontmatter metadata from AST node */
function extractFrontmatter(frontmatterNode: ASTNode | undefined): FrontmatterYAML {
  if (frontmatterNode?.value) {
    return yamlLoad(frontmatterNode.value) as FrontmatterYAML;
  }
  return {};
}

/** Removes YAML frontmatter block from markdown */
function removeFrontmatter(markdownText: string): string {
  return markdownText.replace(/^---\n[\s\S]*?\n---\n/, '');
}

// Exported functions
/** Vite plugin that transforms markdown files to CSF */
export function rollupMdToCsfPlugin(): Plugin {
  return {
    name: 'markdown-to-csf',
    transform(code: string, id: string) {
      if (id.endsWith('.md')) {
        return markdownToCsfWithDocsPage(code);
      }
      return code;
    },
  };
}

/** Converts markdown to CSF with a custom docs page */
export function markdownToCsfWithDocsPage(markdownText: string): string {
  const markdownAst = processor.parse(markdownText) as unknown as { children: ASTNode[] };
  const frontmatterNode = markdownAst.children.find((node) => node.type === 'yaml');
  const metadata = extractFrontmatter(frontmatterNode);

  const markdownContent = removeFrontmatter(markdownText);

  return `
    import { MarkdownDocs } from '/.storybook/components/markdown-docs';
    import React from 'react';
    export default {
      tags: ['autodocs'],
      // Override autodocs page with custom markdown renderer
      parameters: {
        docs: {
          page: () => React.createElement(MarkdownDocs, {
            markdown: ${JSON.stringify(markdownContent)},
            metadata: ${JSON.stringify(metadata)}
          }),
        },
      },
    }
    // Export empty "docs" story to make this docs-only (unofficial solution)
    export const docs = {};
  `;
}

/** Extracts title and subtitle from frontmatter and heading */
export function getMetaDataFromMd(markdownContent: string): { title: string; subtitle: string } {
  const markdownAst = processor.parse(markdownContent) as unknown as { children: ASTNode[] };
  const frontmatterNode = markdownAst.children.find((node) => node.type === 'yaml');
  const headingNode = markdownAst.children.find(
    (node) => node.type === 'heading' && node.depth === 1
  );

  const frontmatter = extractFrontmatter(frontmatterNode);

  // Get subtitle from frontmatter.title, or H1 heading, or default to 'Untitled'
  const subtitle =
    frontmatter.title ||
    (headingNode?.children
      ?.filter((c): c is TextNode => c.type === 'text')
      .map((c) => c.value)
      .join('') ?? 'Untitled');

  // Build title path: category/kind/subtitle (filtering out nulls)
  const title = [frontmatter.category, frontmatter.kind, subtitle]
    .filter((part) => part != null)
    .join('/');

  return { title, subtitle };
}
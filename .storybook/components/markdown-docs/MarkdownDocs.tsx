import React from "react";
import styles from "./MarkdownDocs.module.css";
import { Markdown } from "@storybook/addon-docs/blocks";

interface FrontmatterMetadata {
  title?: string | null;
  kind?: string | null;
  category?: string | null;
  lastUpdated?: string | null;
}

interface MarkdownDocsProps {
  markdown: string;
  metadata?: FrontmatterMetadata;
}

export const MarkdownDocs: React.FC<MarkdownDocsProps> = ({
  markdown,
  metadata,
}) => {
  return (
    <div className={styles.container}>
      {metadata?.lastUpdated && (
        <div className={styles.header}>
          <LastUpdated date={metadata.lastUpdated} />
        </div>
      )}
      <div>
        <Markdown
          options={{
            overrides: {
              pre: SyntaxHighlightedCode,
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    hljs?: {
      highlightElement: (element: HTMLElement) => void;
    };
  }
}

function SyntaxHighlightedCode(props: any) {
  const ref = React.useRef<HTMLElement | null>(null);

  // Extract code element from pre's children
  const codeElement = React.Children.toArray(props.children).find(
    (child: any) => React.isValidElement(child) && child.type === 'code'
  ) as React.ReactElement | undefined;

  const codeProps = (codeElement?.props || {}) as { children?: string; className?: string };
  const codeContent = codeProps.children || '';

  // Detect file tree structures (├─, │, etc.)
  const isFileTree = React.useMemo(() => {
    if (typeof codeContent === 'string') {
      return codeContent.includes('├─') || codeContent.includes('│');
    }
    return false;
  }, [codeContent]);

  React.useEffect(() => {
    if (ref.current && codeProps.className?.includes("lang-") && window.hljs && !isFileTree) {
      window.hljs.highlightElement(ref.current);
      ref.current.removeAttribute("data-highlighted");
    }
  }, [codeProps.className, codeContent, isFileTree]);

  // File trees get lighter background instead of dark code styling
  if (isFileTree) {
    return (
      <pre
        style={{
          background: 'var(--ds-color-global-neutral-50, #f9fafb)',
          border: '1px solid var(--ds-color-global-neutral-200, #e5e7eb)',
        }}
      >
        <code>{codeContent}</code>
      </pre>
    );
  }

  return (
    <pre {...props}>
      <code ref={ref} className={codeProps.className}>
        {codeContent}
      </code>
    </pre>
  );
}

interface LastUpdatedProps {
  date?: string | null
}

const LastUpdated: React.FC<LastUpdatedProps> = ({ date }) => {
  if (!date) return null

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className={styles.lastUpdated}>
      <span className={styles.label}>Last updated:</span>
      <time className={styles.date} dateTime={date}>
        {formattedDate}
      </time>
    </div>
  )
}

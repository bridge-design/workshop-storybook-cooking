import React, { useCallback, useRef, useState, useEffect, useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs/blocks';
// @ts-ignore - CSS module types not properly configured for .storybook directory
import styles from './copy-as-markdown.module.css';
import { Toast } from '../toast/toast';

/**
 * Regex pattern to remove the story variant suffix from Storybook story IDs.
 * @example "button--primary" -> "button"
 */
const STORYBOOK_VARIANT_SUFFIX_PATTERN = /--\w+$/g;

/**
 * Gets the base URL for fetching markdown content from the Storybook LLM endpoint.
 * Each story's markdown is available at: {BASE_URL}/{storyId}.txt
 */
function getStorybookMarkdownApiBaseUrl(): string {
  const basePath = window.location.pathname.replace(/\/[^/]*\.html$/, '');
  return `${window.location.origin}${basePath}/llms/`;
}

/**
 * Converts a Storybook story ID to a markdown URL.
 * @example "button--primary" -> "https://storybooks.example.com/llms/button.txt"
 */
function convertStoryIdToMarkdownUrl(storyId: string): string {
  return `${getStorybookMarkdownApiBaseUrl()}${storyId.replace(STORYBOOK_VARIANT_SUFFIX_PATTERN, '.txt')}`;
}

/**
 * Fetches markdown content from the Storybook API.
 */
async function fetchMarkdownContent(
  url: string,
  signal: AbortSignal | undefined,
): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'text/plain',
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch markdown: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

export const CopyAsMarkdown: React.FC = () => {
  const context = useContext(DocsContext);
  const primaryStory = context.componentStories()?.[0];
  const storyId = primaryStory?.id || '';
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  
  const markdownContentCache = useRef<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const markdownUrl = storyId ? convertStoryIdToMarkdownUrl(storyId) : '';

  // Cleanup: abort pending requests on unmount
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  // Auto-dismiss toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  /**
   * Fetches the markdown content (with caching) and copies it to the clipboard.
   */
  const copyPageContentToClipboard = useCallback(async () => {
    // Skip if a request is already in progress
    if (abortControllerRef.current && !abortControllerRef.current.signal.aborted) {
      return;
    }

    if (!markdownUrl) {
      setToast({ message: 'No story ID available', type: 'error' });
      return;
    }

    // Create new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    // Show loading toast
    setToast({ message: 'Copying page content...', type: 'info' });

    try {
      // Use cached content if available, otherwise fetch from API
      if (!markdownContentCache.current) {
        markdownContentCache.current = await fetchMarkdownContent(markdownUrl, abortController.signal);
      }

      // Copy to clipboard
      await navigator.clipboard.writeText(markdownContentCache.current);

      // Update toast to success
      setToast({ message: 'Page content copied to clipboard!', type: 'success' });
    } catch (error) {
      // Don't show error if request was aborted
      if (abortController.signal.aborted) {
        return;
      }

      const errorMessage = error instanceof Error ? error.message : String(error);
      setToast({ message: `Failed to copy: ${errorMessage}`, type: 'error' });
    } finally {
      // Clear the abort controller ref to allow new requests
      abortControllerRef.current = null;
    }
  }, [markdownUrl]);

  /** Opens the markdown content in a new browser tab */
  const openInNewTab = useCallback(() => {
    if (markdownUrl) {
      window.open(markdownUrl, '_blank');
    }
  }, [markdownUrl]);

  if (!storyId) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={copyPageContentToClipboard}
          aria-label="Copy page content as markdown to clipboard"
        >
          <svg
            className={styles.icon}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 4.5C2 3.67157 2.67157 3 3.5 3H6.5C6.77614 3 7 3.22386 7 3.5C7 3.77614 6.77614 4 6.5 4H3.5C3.22386 4 3 4.22386 3 4.5V12.5C3 12.7761 3.22386 13 3.5 13H6.5C6.77614 13 7 13.2239 7 13.5C7 13.7761 6.77614 14 6.5 14H3.5C2.67157 14 2 13.3284 2 12.5V4.5Z"
              fill="currentColor"
            />
            <path
              d="M5.5 2C5.22386 2 5 2.22386 5 2.5C5 2.77614 5.22386 3 5.5 3H10.5C10.7761 3 11 2.77614 11 2.5C11 2.22386 10.7761 2 10.5 2H5.5Z"
              fill="currentColor"
            />
            <path
              d="M8.5 4C8.22386 4 8 4.22386 8 4.5V12.5C8 12.7761 8.22386 13 8.5 13H12.5C12.7761 13 13 12.7761 13 12.5V4.5C13 4.22386 12.7761 4 12.5 4H8.5ZM9 5H12V12H9V5Z"
              fill="currentColor"
            />
          </svg>
          Copy Page
        </button>
      </div>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </>
  );
};


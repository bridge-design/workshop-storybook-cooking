import React, { ReactNode, useState } from 'react';
import styles from './icon-gallery.module.css';

interface IconItemProps {
  name: string;
  children?: ReactNode;
  iconSize?: number;
  iconColor?: string;
}

export const IconItem = ({ name, children, iconSize = 24, iconColor = '#000000' }: IconItemProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = `<Icon name="${name}" size={${iconSize}} color="${iconColor}" />`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.item}>
      <div className={styles.iconWrapper}>
        {children}
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          title="Copy code"
        >
          {copied ? '✓' : '⧉'}
        </button>
      </div>
      <span className={styles.label}>{name}</span>
    </div>
  );
};

interface IconGalleryProps {
  children?: ReactNode;
}

export const IconGallery = ({ children }: IconGalleryProps) => {
  return <div className={styles.gallery}>{children}</div>;
};

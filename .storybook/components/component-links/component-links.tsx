import { useOf } from "@storybook/addon-docs/blocks";
import React from "react";

import styles from "./component-links.module.css";

const figmaIcon =
  "data:image/png;base64,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";
const githubIcon =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZpbGw9Im5vbmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOEMwIDExLjU0IDIuMjkgMTQuNTMgNS40NyAxNS41OUM1Ljg3IDE1LjY2IDYuMDIgMTUuNDIgNi4wMiAxNS4yMUM2LjAyIDE1LjAyIDYuMDEgMTQuMzkgNi4wMSAxMy43MkM0IDE0LjA5IDMuNDggMTMuMjMgMy4zMiAxMi43OEMzLjIzIDEyLjU1IDIuODQgMTEuODQgMi41IDExLjY1QzIuMjIgMTEuNSAxLjgyIDExLjEzIDIuNDkgMTEuMTJDMy4xMiAxMS4xMSAzLjU3IDExLjcgMy43MiAxMS45NEM0LjQ0IDEzLjE1IDUuNTkgMTIuODEgNi4wNSAxMi42QzYuMTIgMTIuMDggNi4zMyAxMS43MyA2LjU2IDExLjUzQzQuNzggMTEuMzMgMi45MiAxMC42NCAyLjkyIDcuNThDMi45MiA2LjcxIDMuMjMgNS45OSAzLjc0IDUuNDNDMy42NiA1LjIzIDMuMzggNC40MSAzLjgyIDMuMzFDMy44MiAzLjMxIDQuNDkgMy4xIDYuMDIgNC4xM0M2LjY2IDMuOTUgNy4zNCAzLjg2IDguMDIgMy44NkM4LjcgMy44NiA5LjM4IDMuOTUgMTAuMDIgNC4xM0MxMS41NSAzLjA5IDEyLjIyIDMuMzEgMTIuMjIgMy4zMUMxMi42NiA0LjQxIDEyLjM4IDUuMjMgMTIuMyA1LjQzQzEyLjgxIDUuOTkgMTMuMTIgNi43IDEzLjEyIDcuNThDMTMuMTIgMTAuNjUgMTEuMjUgMTEuMzMgOS40NyAxMS41M0M5Ljc2IDExLjc4IDEwLjAxIDEyLjI2IDEwLjAxIDEzLjAxQzEwLjAxIDE0LjA4IDEwIDE0Ljk0IDEwIDE1LjIxQzEwIDE1LjQyIDEwLjE1IDE1LjY3IDEwLjU1IDE1LjU5QzEzLjcxIDE0LjUzIDE2IDExLjUzIDE2IDhDMTYgMy41OCAxMi40MiAwIDggMFoiIHRyYW5zZm9ybT0ic2NhbGUoNjQpIiBmaWxsPSIjMUIxRjIzIi8+Cjwvc3ZnPg==";
// GitHub repository base URL and branch for constructing links
const githubBase =
  "https://github.com/bridge-design/workshop-storybook-cooking";
const branch = "main";

const getComponentFilePath = (
  resolvedOf: ReturnType<typeof useOf>
): string | null => {
  if (resolvedOf.type === "meta") {
    const component = resolvedOf.preparedMeta.component;
    // Try to get the file path from the component's __filemeta or other metadata
    const componentName = component?.displayName || component?.name;
    if (componentName) {
      // Convert component name to lowercase and construct path
      // Assumes components are in src/components/{component-name}/{component-name}.tsx
      const fileName = componentName.toLowerCase();
      return `src/components/${fileName}/${fileName}.tsx`;
    }
  }
  return null;
};

const getLinksFromResolvedOf = (
  resolvedOf: ReturnType<typeof useOf>
): { figma?: string; github?: string } => {
  if (resolvedOf.type === "meta") {
    const { parameters } = resolvedOf.preparedMeta;
    const figma = parameters?.figma;
    let github = parameters?.github;

    // Auto-construct GitHub URL if not provided
    if (!github) {
      const filePath = getComponentFilePath(resolvedOf);
      if (filePath) {
        github = `${githubBase}/blob/${branch}/${filePath}`;
      }
    }

    return { figma, github };
  }
  return {};
};

export const ComponentLinks = () => {
  const resolvedOf = useOf<"meta">("meta");

  const { figma, github } = getLinksFromResolvedOf(resolvedOf);

  if (!figma && !github) {
    return null;
  }

  return (
    <div className={styles.links}>
      {figma && (
        <a
          href={figma}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src={figmaIcon} alt="Figma" className={styles.icon} />
          Figma
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src={githubIcon} alt="GitHub" className={styles.icon} />
          GitHub
        </a>
      )}
    </div>
  );
};

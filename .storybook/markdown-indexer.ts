import { readFile } from 'fs/promises';
import { getMetaDataFromMd } from './markdown-to-csf';
import type { Indexer, IndexInput } from 'storybook/internal/types';

export const markdownIndexer: Indexer = {
  test: /.md$/,
  createIndex: async (fileName: string, { makeTitle }) => {
    const markdownContent = await readFile(fileName, { encoding: 'utf-8' });

    const { title, subtitle } = getMetaDataFromMd(markdownContent);

    const indexInput: IndexInput = {
      type: 'docs',
      importPath: fileName,
      // Export "docs" to make this a docs-only story (unofficial solution)
      exportName: 'docs',
      title: makeTitle(title),
      name: subtitle ?? undefined,
      /**
       * Enable autodocs for this markdown file. Since we generate CSF files on the fly,
       * we hard code the tag here instead of setting it in the virtual file.
       */
      tags: ['autodocs'],
    };

    return [indexInput];
  },
};

export default markdownIndexer;

import { addons, types } from 'storybook/manager-api';
import {
  PARAM_KEY as VERSIONS_PARAM_KEY,
  Versions,
} from './addons/versions/index';

addons.register('version-switcher', () => {
  addons.add(VERSIONS_PARAM_KEY, {
    type: types.TOOL,
    title: 'Versions',
    match: ({ viewMode }) =>
      viewMode ? /^(story|docs)$/.test(viewMode) : false,
    render: Versions,
  });
});


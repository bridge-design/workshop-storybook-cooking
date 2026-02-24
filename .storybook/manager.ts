import { addons } from 'storybook/manager-api'

import {
    defaultConfig,
    type TagBadgeParameters,
  } from 'storybook-addon-tag-badges/manager-helpers'

addons.setConfig({
  tagBadges: [
    {
      tags: 'beta',
      badge: {
        text: 'beta',
        style: {
            background: '#D6E0FF',
            borderColor: '#2952CC',
            borderRadius: '3px',
            padding: '2px 4px',
            fontVariant: 'small-caps',
        }
      },
    },
    {
      tags: 'deprecated',
      badge: {
        text: 'deprecated',
        style: {
            background: '#F8E3DA',
            borderColor: '#85462B',
            borderRadius: '3px',
            padding: '2px 4px',
            fontVariant: 'small-caps',
        }
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
})


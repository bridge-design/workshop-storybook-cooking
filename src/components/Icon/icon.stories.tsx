import type { Meta, StoryObj } from '@storybook/react';
// @ts-ignore - lowercase path to match filesystem
import { Icon, IconProps, IconName } from './icon';
import { IconGallery, IconItem } from '../../../.storybook/components/icon-gallery/icon-gallery';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

const defaultArgs: IconProps = {
  name: 'home',
  size: 24,
  color: '#000000',
};

export const Default: Story = {
  args: defaultArgs
};

const iconNames: IconName[] = ['home', 'user', 'search', 'heart', 'star', 'settings', 'bell', 'mail', 'check', 'close'];

export const AllIcons: Story = {
  render: (args: IconProps) => {
    const iconSize = args.size || 24;
    const iconColor = args.color || '#000000';

    return (
      <IconGallery>
        {iconNames.map((iconName) => (
          <IconItem key={iconName} name={iconName} iconSize={iconSize} iconColor={iconColor}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
          </IconItem>
        ))}
      </IconGallery>
    );
  },
  args: {
    size: 32,
    color: '#000000',
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 64, step: 4 },
      description: 'Size of all icons in pixels',
    },
    color: {
      control: 'color',
      description: 'Color of all icons',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A gallery showcasing all available icons. Use the controls to adjust size and color. Hover over any icon and click the copy button to copy its code.',
      },
    },
  },
};

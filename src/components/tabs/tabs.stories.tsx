import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/components';


const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Controls: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
}

/**
 * Basic tabs with multiple tab panels.
 * Use cases:
 * - Content organization
 * - Settings panels
 * - Multi-section forms
 * - Tabbed interfaces
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>This is the overview content.</p>
      </TabsContent>
      <TabsContent value="details">
        <p>This is the details content.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>This is the settings content.</p>
      </TabsContent>
    </Tabs>
  ),
}

/**
 * Tabs with more content in each panel.
 * Use cases:
 * - Detailed information display
 * - Complex tabbed interfaces
 * - Multi-step workflows
 */
export const WithContent: Story = {
  render: () => (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div>
          <h3>Profile Information</h3>
          <p>Manage your profile settings and personal information here.</p>
        </div>
      </TabsContent>
      <TabsContent value="account">
        <div>
          <h3>Account Settings</h3>
          <p>Update your account preferences and security settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div>
          <h3>Notification Preferences</h3>
          <p>Configure how and when you receive notifications.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

/**
 * Interaction test: Click to switch between tabs
 */
export const ClickToSwitch: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Content for Tab 1
      </TabsContent>
      <TabsContent value="tab2">
        Content for Tab 2
      </TabsContent>
      <TabsContent value="tab3">
        Content for Tab 3
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    await step('Click on Tab 2', async () => {
      const tab2 = canvas.getByRole('tab', { name: 'Tab 2' });
      await user.click(tab2);
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    await step('Click on Tab 3', async () => {
      const tab3 = canvas.getByRole('tab', { name: 'Tab 3' });
      await user.click(tab3);
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    await step('Click back to Tab 1', async () => {
      const tab1 = canvas.getByRole('tab', { name: 'Tab 1' });
      await user.click(tab1);
      await new Promise(resolve => setTimeout(resolve, 300));
    });
  },
};

/**
 * Interaction test: Keyboard navigation with arrow keys
 */
export const KeyboardNavigation: Story = {
  render: () => (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        Home content
      </TabsContent>
      <TabsContent value="about">
        About content
      </TabsContent>
      <TabsContent value="contact">
        Contact content
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    await step('Focus first tab and navigate with arrow keys', async () => {
      const homeTab = canvas.getByRole('tab', { name: 'Home' });
      homeTab.focus();
      await new Promise(resolve => setTimeout(resolve, 200));

      // Navigate to next tab with Right Arrow
      await user.keyboard('{ArrowRight}');
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    await step('Navigate to third tab with arrow key', async () => {
      await user.keyboard('{ArrowRight}');
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    await step('Navigate back with Left Arrow', async () => {
      await user.keyboard('{ArrowLeft}');
      await new Promise(resolve => setTimeout(resolve, 300));
    });
  },
};


import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';

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
 * Interactive test that demonstrates tab switching behavior.
 * This story includes a play function that automatically tests tab interactions.
 */
export const InteractionTest: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Initially Tab 1 should be selected and its content visible
    const tab1 = canvas.getByRole('tab', { name: 'Tab 1' });
    await expect(tab1).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 1')).toBeInTheDocument();

    // Click Tab 2
    const tab2 = canvas.getByRole('tab', { name: 'Tab 2' });
    await userEvent.click(tab2);

    // Tab 2 should now be selected and show its content
    await expect(tab2).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 2')).toBeInTheDocument();

    // Click Tab 3
    const tab3 = canvas.getByRole('tab', { name: 'Tab 3' });
    await userEvent.click(tab3);

    // Tab 3 should now be selected and show its content
    await expect(tab3).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 3')).toBeInTheDocument();

    // Click back to Tab 1
    await userEvent.click(tab1);

    // Tab 1 should be selected again
    await expect(tab1).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Content for Tab 1')).toBeInTheDocument();
  },
}


import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import type { Meta } from '@storybook/react';
import * as stories from './accordion.stories';

// Compose all stories from the stories file
const { Default, Multiple, Collapsible, WithDisabledItem, WithoutIndicator, WithComplexContent } = composeStories(stories);

// Export metadata so Storybook recognizes this test file
const meta = {
  title: 'Accordion/Tests',
  tags: ['test'],
} satisfies Meta;

export default meta;

describe('Accordion Stories Tests', () => {
  describe('Story: Default', () => {
    it('renders default accordion with three items', () => {
      render(<Default />);

      expect(screen.getByText('First Item')).toBeDefined();
      expect(screen.getByText('Second Item')).toBeDefined();
      expect(screen.getByText('Third Item')).toBeDefined();
    });

    it('expands accordion item when clicked', async () => {
      const user = userEvent.setup();
      render(<Default />);

      const firstTrigger = screen.getByText('First Item');
      await user.click(firstTrigger);

      // Content should be visible after clicking
      expect(screen.getByText(/This is the content for the first accordion item/i)).toBeDefined();
    });

    it('collapses previously expanded item in single mode', async () => {
      const user = userEvent.setup();
      render(<Default />);

      // Click first item to expand
      const firstTrigger = screen.getByText('First Item');
      await user.click(firstTrigger);
      expect(screen.getByText(/This is the content for the first accordion item/i)).toBeDefined();

      // Click second item
      const secondTrigger = screen.getByText('Second Item');
      await user.click(secondTrigger);

      // Second content should be visible
      expect(screen.getByText(/This is the content for the second accordion item/i)).toBeDefined();
    });
  });

  describe('Story: Multiple', () => {
    it('renders with multiple items expanded by default', () => {
      render(<Multiple />);

      // Both items should be expanded by default
      expect(screen.getByText(/With multiple mode enabled/i)).toBeDefined();
      expect(screen.getByText(/This item is also expanded by default/i)).toBeDefined();
    });

    it('allows multiple items to be expanded simultaneously', async () => {
      const user = userEvent.setup();
      render(<Multiple />);

      // First two are already expanded, click third
      const thirdTrigger = screen.getByText('Third Item');
      await user.click(thirdTrigger);

      // All three contents should be visible
      expect(screen.getByText(/With multiple mode enabled/i)).toBeDefined();
      expect(screen.getByText(/This item is also expanded by default/i)).toBeDefined();
      expect(screen.getByText(/You can expand this item without collapsing/i)).toBeDefined();
    });
  });

  describe('Story: Collapsible', () => {
    it('renders with first item expanded by default', () => {
      render(<Collapsible />);

      expect(screen.getByText(/With collapsible enabled/i)).toBeDefined();
    });

    it('allows collapsing the expanded item', async () => {
      const user = userEvent.setup();
      render(<Collapsible />);

      // Content is visible by default
      expect(screen.getByText(/With collapsible enabled/i)).toBeDefined();

      // Click to collapse
      const firstTrigger = screen.getByText('First Item');
      await user.click(firstTrigger);

      // After collapse, the trigger button should have aria-expanded="false"
      const button = firstTrigger.closest('button');
      expect(button?.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('Story: WithDisabledItem', () => {
    it('renders with disabled item', () => {
      render(<WithDisabledItem />);

      expect(screen.getByText('Enabled Item')).toBeDefined();
      expect(screen.getByText('Disabled Item')).toBeDefined();
      expect(screen.getByText('Another Enabled Item')).toBeDefined();
    });

    it('disabled item cannot be interacted with', () => {
      render(<WithDisabledItem />);

      const disabledTrigger = screen.getByText('Disabled Item').closest('button');
      expect(disabledTrigger?.getAttribute('disabled')).toBe('');
      expect(disabledTrigger?.getAttribute('data-disabled')).toBe('');
    });

    it('enabled items can still be clicked', async () => {
      const user = userEvent.setup();
      render(<WithDisabledItem />);

      const enabledTrigger = screen.getByText('Enabled Item');
      await user.click(enabledTrigger);

      expect(screen.getByText(/This item can be toggled normally/i)).toBeDefined();
    });
  });

  describe('Story: WithoutIndicator', () => {
    it('renders accordion without indicator icons', () => {
      render(<WithoutIndicator />);

      expect(screen.getByText('Item without Indicator')).toBeDefined();
      expect(screen.getByText('Another Item')).toBeDefined();
    });

    it('still functions correctly without indicators', async () => {
      const user = userEvent.setup();
      render(<WithoutIndicator />);

      const trigger = screen.getByText('Item without Indicator');
      await user.click(trigger);

      expect(screen.getByText(/This accordion item doesn't have an indicator icon/i)).toBeDefined();
    });
  });

  describe('Story: WithComplexContent', () => {
    it('renders complex nested content', () => {
      render(<WithComplexContent />);

      expect(screen.getByText('Product Information')).toBeDefined();
      expect(screen.getByText('Specifications')).toBeDefined();
    });

    it('expands to show complex nested HTML', async () => {
      const user = userEvent.setup();
      render(<WithComplexContent />);

      const trigger = screen.getByText('Product Information');
      await user.click(trigger);

      // Check for nested content
      expect(screen.getByText('Product Details')).toBeDefined();
      expect(screen.getByText(/This accordion panel can contain complex nested content/i)).toBeDefined();
      expect(screen.getByText('Feature one')).toBeDefined();
      expect(screen.getByText('Feature two')).toBeDefined();
      expect(screen.getByText('Feature three')).toBeDefined();
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes on triggers', async () => {
      const user = userEvent.setup();
      render(<Default />);

      const trigger = screen.getByText('First Item').closest('button');

      // Initially collapsed
      expect(trigger?.getAttribute('aria-expanded')).toBe('false');

      // Click to expand
      await user.click(trigger!);

      // Now expanded
      expect(trigger?.getAttribute('aria-expanded')).toBe('true');
    });

    it('disabled items have correct attributes', () => {
      render(<WithDisabledItem />);

      const disabledTrigger = screen.getByText('Disabled Item').closest('button');
      expect(disabledTrigger?.getAttribute('disabled')).toBe('');
      expect(disabledTrigger?.getAttribute('data-disabled')).toBe('');
      expect(disabledTrigger?.getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('Keyboard Navigation', () => {
    it('expands item when pressing Enter', async () => {
      const user = userEvent.setup();
      render(<Default />);

      const trigger = screen.getByText('First Item');
      trigger.focus();
      await user.keyboard('{Enter}');

      expect(screen.getByText(/This is the content for the first accordion item/i)).toBeDefined();
    });

    it('expands item when pressing Space', async () => {
      const user = userEvent.setup();
      render(<Default />);

      const trigger = screen.getByText('Second Item');
      trigger.focus();
      await user.keyboard(' ');

      expect(screen.getByText(/This is the content for the second accordion item/i)).toBeDefined();
    });

    it('navigates between items with arrow keys', async () => {
      const user = userEvent.setup();
      render(<Default />);

      const firstTrigger = screen.getByText('First Item');
      const secondTrigger = screen.getByText('Second Item');

      // Focus first trigger
      firstTrigger.focus();
      expect(document.activeElement).toBe(firstTrigger);

      // Press ArrowDown to move to second trigger
      await user.keyboard('{ArrowDown}');

      // Second trigger should now be focused
      expect(document.activeElement).toBe(secondTrigger);
    });
  });
});

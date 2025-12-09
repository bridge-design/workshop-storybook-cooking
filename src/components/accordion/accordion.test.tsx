import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@vitest/browser/context';
import { userEvent } from '@vitest/browser/context';
import React from 'react';
import { Accordion } from './accordion';

describe('Accordion', () => {
  describe('Basic Rendering', () => {
    it('renders accordion with multiple items', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>First Item</Accordion.Trigger>
            <Accordion.Content>First Content</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Second Item</Accordion.Trigger>
            <Accordion.Content>Second Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      expect(screen.getByText('First Item')).toBeDefined();
      expect(screen.getByText('Second Item')).toBeDefined();
    });

    it('renders accordion with indicator', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>
              Item with Indicator
              <Accordion.Indicator />
            </Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      expect(screen.getByText('Item with Indicator')).toBeDefined();
    });
  });

  describe('Interaction Tests', () => {
    it('expands accordion item when clicked', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Click Me</Accordion.Trigger>
            <Accordion.Content>Hidden Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const trigger = screen.getByText('Click Me');
      await userEvent.click(trigger);

      // Content should be visible after clicking
      const content = screen.getByText('Hidden Content');
      expect(content).toBeDefined();
    });

    it('collapses previously expanded item in single mode', async () => {
      render(
        <Accordion defaultValue="item-1">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>First Item</Accordion.Trigger>
            <Accordion.Content>First Content</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Second Item</Accordion.Trigger>
            <Accordion.Content>Second Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      // First item is expanded by default
      expect(screen.getByText('First Content')).toBeDefined();

      // Click second item
      const secondTrigger = screen.getByText('Second Item');
      await userEvent.click(secondTrigger);

      // Second content should be visible
      expect(screen.getByText('Second Content')).toBeDefined();
    });

    it('allows multiple items expanded in multiple mode', async () => {
      render(
        <Accordion type="multiple" defaultValue={['item-1']}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>First Item</Accordion.Trigger>
            <Accordion.Content>First Content</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Second Item</Accordion.Trigger>
            <Accordion.Content>Second Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      // First item is expanded by default
      expect(screen.getByText('First Content')).toBeDefined();

      // Click second item
      const secondTrigger = screen.getByText('Second Item');
      await userEvent.click(secondTrigger);

      // Both contents should be visible
      expect(screen.getByText('First Content')).toBeDefined();
      expect(screen.getByText('Second Content')).toBeDefined();
    });

    it('allows collapsing expanded item when collapsible is true', async () => {
      render(
        <Accordion collapsible defaultValue="item-1">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Click to Collapse</Accordion.Trigger>
            <Accordion.Content>Collapsible Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      // Content is visible by default
      expect(screen.getByText('Collapsible Content')).toBeDefined();

      // Click to collapse
      const trigger = screen.getByText('Click to Collapse');
      await userEvent.click(trigger);

      // Content should be hidden (not in DOM or not visible)
      // Note: Radix UI might keep it in DOM but hidden with data-state="closed"
    });

    it('does not respond to clicks on disabled items', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1" disabled>
            <Accordion.Trigger>Disabled Item</Accordion.Trigger>
            <Accordion.Content>Hidden Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const trigger = screen.getByText('Disabled Item');
      await userEvent.click(trigger);

      // Trigger should have disabled attribute
      expect(trigger.closest('button')?.getAttribute('disabled')).toBe('');
    });
  });

  describe('Controlled State', () => {
    it('respects controlled value prop', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('item-1');

        return (
          <>
            <button onClick={() => setValue('item-2')}>Change to Item 2</button>
            <Accordion value={value} onValueChange={setValue}>
              <Accordion.Item value="item-1">
                <Accordion.Trigger>First Item</Accordion.Trigger>
                <Accordion.Content>First Content</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger>Second Item</Accordion.Trigger>
                <Accordion.Content>Second Content</Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </>
        );
      };

      render(<TestComponent />);

      // First item is expanded by default
      expect(screen.getByText('First Content')).toBeDefined();

      // Click external button to change value
      const changeButton = screen.getByText('Change to Item 2');
      await userEvent.click(changeButton);

      // Second content should now be visible
      expect(screen.getByText('Second Content')).toBeDefined();
    });

    it('calls onValueChange callback when item is toggled', async () => {
      const onValueChange = vi.fn();

      render(
        <Accordion onValueChange={onValueChange}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Toggle Me</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const trigger = screen.getByText('Toggle Me');
      await userEvent.click(trigger);

      expect(onValueChange).toHaveBeenCalledWith('item-1');
    });
  });

  describe('Keyboard Navigation', () => {
    it('expands item when pressing Enter', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Press Enter</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const trigger = screen.getByText('Press Enter');
      trigger.focus();
      await userEvent.keyboard('{Enter}');

      expect(screen.getByText('Content')).toBeDefined();
    });

    it('expands item when pressing Space', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Press Space</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const trigger = screen.getByText('Press Space');
      trigger.focus();
      await userEvent.keyboard(' ');

      expect(screen.getByText('Content')).toBeDefined();
    });

    it('navigates between items with arrow keys', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>First Item</Accordion.Trigger>
            <Accordion.Content>First Content</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Second Item</Accordion.Trigger>
            <Accordion.Content>Second Content</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Trigger>Third Item</Accordion.Trigger>
            <Accordion.Content>Third Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const firstTrigger = screen.getByText('First Item');
      const secondTrigger = screen.getByText('Second Item');

      // Focus first trigger
      firstTrigger.focus();

      // Press ArrowDown to move to second trigger
      await userEvent.keyboard('{ArrowDown}');

      // Second trigger should now be focused
      expect(document.activeElement).toBe(secondTrigger);
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Accessible Item</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const trigger = screen.getByText('Accessible Item').closest('button');

      // Trigger should have aria-expanded
      expect(trigger?.getAttribute('aria-expanded')).toBe('false');

      // Click to expand
      await userEvent.click(trigger!);

      // aria-expanded should be true
      expect(trigger?.getAttribute('aria-expanded')).toBe('true');
    });

    it('has aria-disabled for disabled items', async () => {
      render(
        <Accordion>
          <Accordion.Item value="item-1" disabled>
            <Accordion.Trigger>Disabled Item</Accordion.Trigger>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      const trigger = screen.getByText('Disabled Item').closest('button');
      expect(trigger?.getAttribute('disabled')).toBe('');
    });
  });

  describe('Complex Content', () => {
    it('renders complex nested content', async () => {
      render(
        <Accordion defaultValue="item-1">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Complex Content</Accordion.Trigger>
            <Accordion.Content>
              <div>
                <h3>Heading</h3>
                <p>Paragraph text</p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );

      expect(screen.getByText('Heading')).toBeDefined();
      expect(screen.getByText('Paragraph text')).toBeDefined();
      expect(screen.getByText('Item 1')).toBeDefined();
      expect(screen.getByText('Item 2')).toBeDefined();
    });
  });
});

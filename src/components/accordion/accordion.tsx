import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import cm from "./accordion.module.css";

type AccordionSingleProps = {
  type?: 'single';
  /** Controlled value of the expanded accordion item */
  value?: string;
  /** Uncontrolled initial value of the expanded accordion item */
  defaultValue?: string;
  /** Callback fired when the expanded state changes */
  onValueChange?: (value: string) => void;
  /** Whether an accordion item can be collapsed after it has been opened */
  collapsible?: boolean;
} & Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange' | 'collapsible'>;

type AccordionMultipleProps = {
  type: 'multiple';
  /** Controlled values of the expanded accordion items */
  value?: string[];
  /** Uncontrolled initial values of the expanded accordion items */
  defaultValue?: string[];
  /** Callback fired when the expanded state changes */
  onValueChange?: (value: string[]) => void;
} & Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>, 'type' | 'value' | 'defaultValue' | 'onValueChange'>;

export type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & {
  /** Optional className for adding custom CSS classes to the Accordion element */
  className?: string;
  /** Accordion content, typically consisting of one or more Accordion.Item components */
  children: React.ReactNode;
};

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  /** Optional className for adding custom CSS classes to the Accordion.Item element */
  className?: string;
  /** Accordion item content, typically consisting of Accordion.Trigger and Accordion.Content components */
  children: React.ReactNode;
}

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  /** Optional className for adding custom CSS classes to the Accordion.Trigger element */
  className?: string;
  /** Content displayed in the accordion trigger/header. Can include text, icons, or other React elements */
  children: React.ReactNode;
}

export interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  /** Optional className for adding custom CSS classes to the Accordion.Content element */
  className?: string;
  /** Content displayed in the collapsible accordion panel. Can include any React elements, text, or components */
  children: React.ReactNode;
}

export interface AccordionIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional className for adding custom CSS classes to the Accordion.Indicator element */
  className?: string;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

/**
 * The Accordion component displays a vertically stacked set of interactive sections
 * that allow users to expand and collapse content panels.
 *
 * Key Features:
 * - Supports both controlled and uncontrolled usage
 * - Allows single or multiple items to be expanded
 * - Fully accessible with keyboard navigation and screen reader support
 * - Smooth expand/collapse animations
 * - Customizable styling via className props
 *
 * [Github](https://github.com/your-org/repo/tree/main/src/components/accordion)
 */
export const Accordion = ({ className, children, ...props }: AccordionProps) => {
  // Default to 'single' type if not specified
  const accordionProps = 
    'type' in props && props.type === 'multiple' 
      ? (props as AccordionMultipleProps)
      : ({ ...props, type: 'single' as const } as AccordionSingleProps);
  
  return (
    <AccordionPrimitive.Root className={composeClassName(cm.accordion, className)} {...(accordionProps as any)}>
      {children}
    </AccordionPrimitive.Root>
  );
};

Accordion.displayName = 'Accordion';

export const AccordionItem = ({ className, children, ...props }: AccordionItemProps) => (
  <AccordionPrimitive.Item className={composeClassName(cm.accordionItem, className)} {...props}>
    {children}
  </AccordionPrimitive.Item>
);

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => (
  <AccordionPrimitive.Trigger className={composeClassName(cm.accordionTrigger, className)} {...props}>
    {children}
  </AccordionPrimitive.Trigger>
);

AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => (
  <AccordionPrimitive.Content className={composeClassName(cm.accordionContent, className)} {...props}>
    <div className={cm.accordionContentInner}>
      {children}
    </div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = 'AccordionContent';

export const AccordionIndicator = ({ className, ...props }: AccordionIndicatorProps) => (
  <div className={composeClassName(cm.accordionIndicator, className)} {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cm.accordionIndicatorIcon}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </div>
);

AccordionIndicator.displayName = 'AccordionIndicator';

// Attach subcomponents to main component for dot notation access
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
Accordion.Indicator = AccordionIndicator;


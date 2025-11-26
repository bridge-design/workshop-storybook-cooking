import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import cm from "./accordion.module.css";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
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
export const Accordion = ({ className, children, ...props }) => {
    // Default to 'single' type if not specified
    const accordionProps = 'type' in props && props.type === 'multiple'
        ? props
        : { ...props, type: 'single' };
    return (<AccordionPrimitive.Root className={composeClassName(cm.accordion, className)} {...accordionProps}>
      {children}
    </AccordionPrimitive.Root>);
};
Accordion.displayName = 'Accordion';
export const AccordionItem = ({ className, children, ...props }) => (<AccordionPrimitive.Item className={composeClassName(cm.accordionItem, className)} {...props}>
    {children}
  </AccordionPrimitive.Item>);
AccordionItem.displayName = 'AccordionItem';
export const AccordionTrigger = ({ className, children, ...props }) => (<AccordionPrimitive.Trigger className={composeClassName(cm.accordionTrigger, className)} {...props}>
    {children}
  </AccordionPrimitive.Trigger>);
AccordionTrigger.displayName = 'AccordionTrigger';
export const AccordionContent = ({ className, children, ...props }) => (<AccordionPrimitive.Content className={composeClassName(cm.accordionContent, className)} {...props}>
    <div className={cm.accordionContentInner}>
      {children}
    </div>
  </AccordionPrimitive.Content>);
AccordionContent.displayName = 'AccordionContent';
export const AccordionIndicator = ({ className, ...props }) => (<div className={composeClassName(cm.accordionIndicator, className)} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cm.accordionIndicatorIcon} aria-hidden="true">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  </div>);
AccordionIndicator.displayName = 'AccordionIndicator';
// Attach subcomponents to main component for dot notation access
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
Accordion.Indicator = AccordionIndicator;

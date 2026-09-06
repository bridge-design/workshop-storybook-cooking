import { default as React } from '../../../node_modules/react';
import * as AccordionPrimitive from "@radix-ui/react-accordion";
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
export declare const Accordion: {
    ({ className, children, ...props }: AccordionProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ className, children, ...props }: AccordionItemProps): React.JSX.Element;
        displayName: string;
    };
    Trigger: {
        ({ className, children, ...props }: AccordionTriggerProps): React.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ className, children, ...props }: AccordionContentProps): React.JSX.Element;
        displayName: string;
    };
    Indicator: {
        ({ className, ...props }: AccordionIndicatorProps): React.JSX.Element;
        displayName: string;
    };
};
export declare const AccordionItem: {
    ({ className, children, ...props }: AccordionItemProps): React.JSX.Element;
    displayName: string;
};
export declare const AccordionTrigger: {
    ({ className, children, ...props }: AccordionTriggerProps): React.JSX.Element;
    displayName: string;
};
export declare const AccordionContent: {
    ({ className, children, ...props }: AccordionContentProps): React.JSX.Element;
    displayName: string;
};
export declare const AccordionIndicator: {
    ({ className, ...props }: AccordionIndicatorProps): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=accordion.d.ts.map
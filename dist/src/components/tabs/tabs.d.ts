import React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
export interface TabsProps extends TabsPrimitive.TabsProps {
    /** Optional className for adding custom CSS classes to the Tabs element */
    className?: string;
    /** Tabs content */
    children: React.ReactNode;
}
export interface TabsListProps extends TabsPrimitive.TabsListProps {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** List content */
    children: React.ReactNode;
}
export interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Trigger content */
    children: React.ReactNode;
}
export interface TabsContentProps extends TabsPrimitive.TabsContentProps {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Content */
    children: React.ReactNode;
}
export declare const Tabs: {
    ({ className, children, ...props }: TabsProps): React.JSX.Element;
    displayName: string;
};
export declare const TabsList: {
    ({ className, children, ...props }: TabsListProps): React.JSX.Element;
    displayName: string;
};
export declare const TabsTrigger: {
    ({ className, children, ...props }: TabsTriggerProps): React.JSX.Element;
    displayName: string;
};
export declare const TabsContent: {
    ({ className, children, ...props }: TabsContentProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=tabs.d.ts.map
import React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import cm from "./tabs.module.css";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
export const Tabs = ({ className, children, ...props }) => (<TabsPrimitive.Root className={composeClassName(cm.tabs, className)} {...props}>
    {children}
  </TabsPrimitive.Root>);
Tabs.displayName = 'Tabs';
export const TabsList = ({ className, children, ...props }) => (<TabsPrimitive.List className={composeClassName(cm.tabsList, className)} {...props}>
    {children}
  </TabsPrimitive.List>);
TabsList.displayName = 'TabsList';
export const TabsTrigger = ({ className, children, ...props }) => (<TabsPrimitive.Trigger className={composeClassName(cm.tabsTrigger, className)} {...props}>
    {children}
  </TabsPrimitive.Trigger>);
TabsTrigger.displayName = 'TabsTrigger';
export const TabsContent = ({ className, children, ...props }) => (<TabsPrimitive.Content className={composeClassName(cm.tabsContent, className)} {...props}>
    {children}
  </TabsPrimitive.Content>);
TabsContent.displayName = 'TabsContent';

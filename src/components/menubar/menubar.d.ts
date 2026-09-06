import { default as React } from '../../../node_modules/react';
export interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Optional className for adding custom CSS classes to the Menubar element */
    className?: string;
    /** Menubar content */
    children: React.ReactNode;
    /**
     * Variant of the menubar
     * @default 'default'
     */
    variant?: 'default' | 'transparent';
}
export interface MenubarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Item content */
    children: React.ReactNode;
    /** Optional href for making the item a link */
    href?: string;
    /** Whether the menu item is active */
    active?: boolean;
}
export declare const Menubar: {
    ({ className, children, variant, ...props }: MenubarProps): React.JSX.Element;
    displayName: string;
};
export declare const MenubarItem: {
    ({ className, children, href, active, ...props }: MenubarItemProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=menubar.d.ts.map
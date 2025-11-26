import React from "react";
declare const badgeStatuses: readonly ["planned", "in progress", "done"];
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Status of the badge. Required when no children are provided. Can be 'planned', 'in progress', or 'done'. The text is automatically derived from the status. */
    status?: typeof badgeStatuses[number];
    /** Optional className for adding custom CSS classes to the Badge element */
    className?: string;
    /** Custom text content. When provided, status is ignored and no status icons are shown. */
    children?: React.ReactNode;
}
export declare const Badge: {
    ({ status, children, className, ...props }: BadgeProps): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=badge.d.ts.map
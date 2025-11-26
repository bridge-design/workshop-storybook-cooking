import React from "react";
export type AlertVariant = "Info" | "Warning" | "Success" | "Danger";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Optional className for adding custom CSS classes to the Alert element */
    className?: string;
    /** Variant of the alert. Defaults to 'Info'. */
    variant?: AlertVariant;
    /** Whether to show the icon. Defaults to true. */
    icon?: boolean;
    /** Whether to show the link. Defaults to true. */
    link?: boolean;
    /** Whether the alert is dismissible. Defaults to true. */
    dismissible?: boolean;
    /** The main text content of the alert */
    text?: string;
    /** The label for the link. Defaults to 'Link'. */
    linkLabel?: string;
    /** Custom content. When provided, text and linkLabel are ignored. */
    children?: React.ReactNode;
    /** Callback fired when the alert is dismissed */
    onDismiss?: () => void;
}
export declare const Alert: {
    ({ className, variant, icon, link, dismissible, text, linkLabel, children, onDismiss, ...props }: AlertProps): React.JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=alert.d.ts.map
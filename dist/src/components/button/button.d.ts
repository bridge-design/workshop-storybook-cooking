import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Optional className for adding custom CSS classes to the Button element */
    className?: string;
    /** Custom text content. When provided, status is ignored and no status icons are shown. */
    children?: React.ReactNode;
    /** Type of the button. Defaults to 'button'. */
    type?: 'button' | 'submit' | 'reset';
}
export declare const Button: {
    ({ className, children, type, ...props }: ButtonProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=button.d.ts.map
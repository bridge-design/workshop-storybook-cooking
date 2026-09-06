import { default as React } from '../../../node_modules/react';
export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Optional className for adding custom CSS classes to the Logo element */
    className?: string;
    /** Optional width of the logo */
    width?: number | string;
    /** Optional height of the logo */
    height?: number | string;
    /** Variant of the logo. 'blank' uses blank color, default uses primary color */
    variant?: 'blank' | 'default';
}
export declare const Logo: {
    ({ className, width, height, variant, ...props }: LogoProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=logo.d.ts.map
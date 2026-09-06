import { default as React } from '../../../node_modules/react';
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** Optional className for adding custom CSS classes to the Header element */
    className?: string;
    /** Content to display on the left side of the header */
    left?: React.ReactNode;
    /** Content to display in the middle of the header */
    middle?: React.ReactNode;
    /** Content to display on the right side of the header */
    right?: React.ReactNode;
}
export declare const Header: {
    ({ className, left, middle, right, ...rest }: HeaderProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=header.d.ts.map
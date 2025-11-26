import React from "react";
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    /** Optional className for adding custom CSS classes to the Table element */
    className?: string;
    /** Table content */
    children: React.ReactNode;
}
export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Header content */
    children: React.ReactNode;
}
export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Body content */
    children: React.ReactNode;
}
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Row content */
    children: React.ReactNode;
}
export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Header cell content */
    children: React.ReactNode;
}
export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    /** Optional className for adding custom CSS classes */
    className?: string;
    /** Cell content */
    children: React.ReactNode;
}
export declare const Table: {
    ({ className, children, ...props }: TableProps): React.JSX.Element;
    displayName: string;
};
export declare const TableHeader: {
    ({ className, children, ...props }: TableHeaderProps): React.JSX.Element;
    displayName: string;
};
export declare const TableBody: {
    ({ className, children, ...props }: TableBodyProps): React.JSX.Element;
    displayName: string;
};
export declare const TableRow: {
    ({ className, children, ...props }: TableRowProps): React.JSX.Element;
    displayName: string;
};
export declare const TableHead: {
    ({ className, children, ...props }: TableHeadProps): React.JSX.Element;
    displayName: string;
};
export declare const TableCell: {
    ({ className, children, ...props }: TableCellProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=table.d.ts.map
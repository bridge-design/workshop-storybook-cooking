import React from "react";
import cm from "./table.module.css";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
export const Table = ({ className, children, ...props }) => (<table className={composeClassName(cm.table, className)} {...props}>
    {children}
  </table>);
Table.displayName = 'Table';
export const TableHeader = ({ className, children, ...props }) => (<thead className={composeClassName(cm.tableHeader, className)} {...props}>
    {children}
  </thead>);
TableHeader.displayName = 'TableHeader';
export const TableBody = ({ className, children, ...props }) => (<tbody className={composeClassName(cm.tableBody, className)} {...props}>
    {children}
  </tbody>);
TableBody.displayName = 'TableBody';
export const TableRow = ({ className, children, ...props }) => (<tr className={composeClassName(cm.tableRow, className)} {...props}>
    {children}
  </tr>);
TableRow.displayName = 'TableRow';
export const TableHead = ({ className, children, ...props }) => (<th className={composeClassName(cm.tableHead, className)} {...props}>
    {children}
  </th>);
TableHead.displayName = 'TableHead';
export const TableCell = ({ className, children, ...props }) => (<td className={composeClassName(cm.tableCell, className)} {...props}>
    {children}
  </td>);
TableCell.displayName = 'TableCell';

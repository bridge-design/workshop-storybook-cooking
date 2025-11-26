import React from "react";
import cm from "./layout.module.css";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
export const Layout = ({ children, className, ...rest }) => (<div className={composeClassName(cm.layoutRoot, className)} {...rest}>
    {children}
  </div>);
Layout.displayName = "Layout";

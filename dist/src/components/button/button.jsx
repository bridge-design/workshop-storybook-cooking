import React from "react";
import cm from "./button.module.css";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
export const Button = ({ className, children, type = 'button', ...props }) => (<button type={type} className={composeClassName(cm.button, className)} {...props}>
    {children}
  </button>);
Button.displayName = 'Button';

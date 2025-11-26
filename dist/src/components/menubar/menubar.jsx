import React from "react";
import cm from "./menubar.module.css";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
export const Menubar = ({ className, children, variant = 'default', ...props }) => {
    const variantClass = variant === 'transparent' ? cm.menubarTransparent : '';
    const rootClassName = composeClassName(cm.menubar, composeClassName(variantClass, className));
    return (<nav className={rootClassName} role="menubar" {...props}>
      {children}
    </nav>);
};
Menubar.displayName = 'Menubar';
export const MenubarItem = ({ className, children, href, active, ...props }) => {
    const activeClass = active ? cm.menubarItemActive : '';
    const itemClassName = composeClassName(cm.menubarItem, composeClassName(activeClass, className));
    if (href) {
        return (<a href={href} className={itemClassName} {...props}>
        {children}
      </a>);
    }
    return (<button type="button" className={itemClassName} {...props}>
      {children}
    </button>);
};
MenubarItem.displayName = 'MenubarItem';

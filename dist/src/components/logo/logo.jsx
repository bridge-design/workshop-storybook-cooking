import React from "react";
import cm from "./logo.module.css";
import PearIcon from "./pear.svg?react";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
export const Logo = ({ className, width, height, variant = 'default', ...props }) => {
    const style = {
        ...(width && { width }),
        ...(height && { height }),
    };
    const variantClass = variant === 'blank' ? cm.logoBlank : '';
    const rootClassName = composeClassName(cm.logo, composeClassName(variantClass, className));
    return (<div className={rootClassName} style={style} {...props}>
      <PearIcon className={cm.logoIcon}/>
    </div>);
};
Logo.displayName = 'Logo';

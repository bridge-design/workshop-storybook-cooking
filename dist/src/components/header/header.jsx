import React from "react";
import { Layout } from "../layout";
import cm from "./header.module.css";
const composeClassName = (base, extra) => extra ? `${base} ${extra}` : base;
export const Header = ({ className, left, middle, right, ...rest }) => (<header className={composeClassName(cm.headerRoot, className)} {...rest}>
    <Layout className={cm.headerInner}>
      <div className={cm.headerLeft}>{left}</div>
      <div className={cm.headerMiddle}>{middle}</div>
      <div className={cm.headerRight}>{right}</div>
    </Layout>
  </header>);
Header.displayName = "Header";

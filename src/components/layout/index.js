import React from "react";
import Sidebar from "./sidebar";
import Body from "./body";
import Header from "./header";

const Layout = ({ children, className }) => {
  const sx = `${className ? className : ""}`;
  return <div className={sx}>{children}</div>;
};

const Main = ({ children, className }) => {
  const sx = `main-wrapper ${className ? className : ""}`;
  return <div className={sx}>{children}</div>;
};

Layout.Header = Header;
Layout.Sidebar = Sidebar;
Layout.Body = Body;
Layout.Main = Main;

export default Layout;

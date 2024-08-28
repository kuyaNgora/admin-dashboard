import React from "react";

const Body = ({ children, className }) => {
  const sx = `w-full ${className ? className : ""}`;
  return <div className={sx}>{children}</div>;
};

export default Body;

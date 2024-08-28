import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // pages / data-tables

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .map((crumbs) => {
      currentLink = +`/${crumbs}`;

      return (
        <div key={crumbs} className="breadcrumb">
          <Link className="link" to={currentLink}>
            pages
          </Link>
          <div>/</div>
          <Link className="link" to={currentLink}>
            {crumbs.replace("-", " ")}
          </Link>
        </div>
      );
    });

  return <div>{crumbs}</div>;
};

export default Breadcrumbs;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Routes } from "./utils";

const Sidebar = () => {
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return Routes.map((route, id) => {
    return (
      <NavLink end key={id} to={route.pathname}>
        <div
          className={
            route?.isActive === splitLocation[1]
              ? "nav-wrapper active"
              : "nav-wrapper"
          }
        >
          <route.icon size={20} />
          <div className="nav-label">{route.label}</div>
          <div className="indicator" />
        </div>
      </NavLink>
    );
  });
};

export default Sidebar;

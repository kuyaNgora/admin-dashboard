import React from "react";
import Navigation from "../navigation";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-container">
        <div className="relative overflow-hidden w-full h-full">
          <div className="absolute inset-0 overflow-scroll -mr-[17px] -mb-[22px]  ">
            <div className="content-container">
              <div className="title-container">
                <h1 className="text-2xl uppercase dark:text-white my-8">
                  <span className="font-extrabold">admin</span> dashboard
                </h1>
                <div className="flex h-px w-full mb-5 bg-[rgba(135,140,189,0.3)]" />
              </div>
              <div className="nav-container">
                <Navigation.Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

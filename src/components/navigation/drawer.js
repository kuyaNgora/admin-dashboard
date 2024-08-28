import React from "react";
import Sidebar from "./sidebar";
import { MdClose } from "react-icons/md";

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`drawer-wrapper ${isOpen ? "drawer-open" : "drawer-close"}`}
    >
      <div className={`drawer-container`}>
        <div className="relative">
          <div className="absolute top-3 right-6 cursor-pointer ">
            <MdClose
              size={20}
              className="dark:fill-white"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        <div className="drawer-content-container">
          <div className="title-container">
            <h1 className="text-2xl uppercase text-center dark:text-white my-8">
              <span className="font-extrabold">admin</span> dashboard
            </h1>
            <div className="flex h-px w-full mb-5 bg-[rgba(135,140,189,0.3)]" />
          </div>

          <div className="nav-container">
            <Sidebar />
          </div>
        </div>
      </div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Drawer;

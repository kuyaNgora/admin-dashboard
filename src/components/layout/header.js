/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navigation from "../navigation";
import Search from "../input/search";
import {
  MdDarkMode,
  MdInfoOutline,
  MdLightMode,
  MdMenu,
  MdNotificationsNone,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../service/theme/slice";
import { Dropdown } from "flowbite-react";

const Header = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.Theme?.darkMode);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      dispatch(setMode({ darkMode: true }));
    } else {
      document.documentElement.classList.remove("dark");
      dispatch(setMode({ darkMode: false }));
    }
  }, [darkMode]);

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div>
          <Navigation.Breadcrumbs />
          <div className="header-title">Data Tables</div>
        </div>
        <div className="right-wrapper">
          <div className="right-container">
            <Search />
            <div className="menu-wrapper">
              <MdMenu
                className="icon-menu min-[1200px]:hidden min-[320px]:flex"
                onClick={() => setIsOpen(true)}
              />
              <Dropdown
                label=""
                dismissOnClick={true}
                renderTrigger={() => (
                  <span>
                    <MdNotificationsNone className="icon-menu" />
                  </span>
                )}
                className="!p-[15px] !border-none !shadow-dx rounded-2xl !min-w-[400px] mt-6 mr-6 dark:bg-primary"
              >
                <Dropdown.Header className="flex flex-row items-center justify-between w-full mb-5">
                  <span className="text-sm text-primary dark:text-white font-semibold">
                    Notifications
                  </span>
                  <span className="text-xs font-medium ms-auto cursor-pointer text-primary dark:text-white">
                    Mark all read
                  </span>
                </Dropdown.Header>
                <Dropdown.Item
                  as="div"
                  className="flex items-center gap-2 hover:!bg-transparent"
                >
                  <div>
                    <div className="h-[50px] w-[50px] flex items-center justify-center bg-secondary rounded-xl text-white">
                      I
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm text-primary dark:text-white font-bold">
                      New Update: Admin Dashboard PRO
                    </div>
                    <div className="text-xs text-black dark:text-white font-light">
                      A new update for your downloaded item is available!
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown>

              <Dropdown
                label=""
                dismissOnClick={true}
                renderTrigger={() => (
                  <span>
                    <MdInfoOutline className="icon-menu" />
                  </span>
                )}
                className="!p-[10px] !border-none !shadow-dx rounded-2xl !min-w-[250px] mt-6 dark:bg-primary"
              >
                <Dropdown.Item as="div" className="hover:!bg-transparent">
                  <div className="flex items-center justify-center  w-full h-[40px] text-base border border-black text-primary rounded-xl dark:text-white hover:bg-white hover:bg-opacity-25 dark:border-warmGray-50">
                    See Documentation
                  </div>
                </Dropdown.Item>
              </Dropdown>

              {darkMode ? (
                <MdLightMode
                  className="icon-menu"
                  onClick={() => dispatch(setMode({ darkMode: false }))}
                />
              ) : (
                <MdDarkMode
                  className="icon-menu"
                  onClick={() => dispatch(setMode({ darkMode: true }))}
                />
              )}

              <Dropdown
                label=""
                dismissOnClick={true}
                renderTrigger={() => (
                  <span>
                    <div className="avatar-container">
                      <span className="avatar-wrapper">
                        <span className="avatar">AP</span>
                      </span>
                    </div>
                  </span>
                )}
                className="!p-[15px] !border-none !shadow-dx rounded-2xl !min-w-[230px] mt-6 mr-6 dark:bg-primary"
              >
                <Dropdown.Header>
                  <div className="greetings-wrapper !border-0">
                    <p className="greetings">
                      <span role="img" aria-label="waving hand">
                        👋
                      </span>{" "}
                      Hey, Adela
                    </p>
                  </div>
                </Dropdown.Header>
                <Dropdown.Item as="div" className="menu-item">
                  Profile Settings
                </Dropdown.Item>
                <Dropdown.Item as="div" className="menu-item">
                  Newsletter Settings
                </Dropdown.Item>
                <Dropdown.Item as="div" className="menu-item !text-red-600">
                  Log Out
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

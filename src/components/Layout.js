import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import WatchSidebar from "./WatchSidebar";
import SidebarMenu from "./SidebarMenu";
import { useDispatch } from "react-redux";
import { toggleMenu, toggleWatchMenu } from "../redux/appSlice";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleToggleWatchMenu = () => {
    dispatch(toggleWatchMenu());
  };

  return (
    <div className="">
      <Header
        toggleMenu={
          location.pathname === "/watch"
            ? handleToggleWatchMenu
            : handleToggleMenu
        }
      />
      <div>
        <div className="hidden sm:block">
          {location.pathname === "/watch" ? <WatchSidebar /> : <SidebarMenu />}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div className="block sm:hidden">
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Layout;

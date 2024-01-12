import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "react-sidebar";
import { closeWatchMenu } from "../redux/appSlice";
import { sidebarContents } from "../constants/sidebarContents";
import Logo from "../assets/youtube_logo.jpg";
import { Link } from "react-router-dom";
import WatchSidebarList from "./WatchSidebarList";

const WatchSidebar = () => {
  const { isWatchMenuOpen } = useSelector((store) => store.app);

  const dispatch = useDispatch();

  const handleCloseWatchMenu = () => {
    dispatch(closeWatchMenu());
  };

  return (
    <div className="watch-sidebar">
      <Sidebar
        sidebar={
          <div>
            <div className="flex items-center px-4">
              <div onClick={handleCloseWatchMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer hidden sm:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <img
                src={Logo}
                alt="youtube_logo"
                className="h-14 ml-4 cursor-pointer"
              />
            </div>
            <aside
              className={`sidebar w-56 pb-20 h-full p-2 pr-8 fixed bg-white bottom-0 flex flex-col top-16`}
            >
              <div className="flex flex-col">
                <Link to={"/"}>
                  <WatchSidebarList
                    title={sidebarContents[0].title}
                    icon={sidebarContents[0].icon}
                    link={sidebarContents[0].link}
                  />
                </Link>

                <div className="flex flex-col ">
                  {sidebarContents.slice(1, 4).map((content) => {
                    const { title, icon, id } = content;
                    return (
                      <WatchSidebarList key={id} title={title} icon={icon} />
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="border-t border-gray-300 my-4"></p>

                {sidebarContents.slice(4, 8).map((content) => {
                  const { title, icon, id } = content;
                  return (
                    <WatchSidebarList key={id} title={title} icon={icon} />
                  );
                })}

                <p className="border-t border-gray-300 my-4"></p>

                <h3 className="ml-5 font-bold mb-2">Explore</h3>

                {sidebarContents.slice(8, 20).map((content) => {
                  const { title, icon, id } = content;
                  return (
                    <WatchSidebarList key={id} title={title} icon={icon} />
                  );
                })}
              </div>
            </aside>
          </div>
        }
        open={isWatchMenuOpen}
        onSetOpen={handleCloseWatchMenu}
        styles={{
          sidebar: {
            background: "white",
            width: "14rem",
            height: "100vh",
            minHeight: "100vh",
            zIndex: 99,
            overflowX: "hidden",
          },
          overlay: { zIndex: 60 },
        }}
      >
        <div></div>
      </Sidebar>
    </div>
  );
};

export default WatchSidebar;

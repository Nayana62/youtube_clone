import React from "react";
import { useSelector } from "react-redux";
import SidebarList from "./SidebarList";
import { sidebarContents } from "../constants/sidebarContents";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const { isMenuOpen } = useSelector((store) => store.app);

  return (
    <>
      <aside
        className={`sidebar w-full ${
          isMenuOpen ? "sm:w-24 xl:w-56" : "sm:w-56 xl:w-24"
        } h-16 pb-20 sm:h-full p-2 sm:pr-8 fixed bg-white bottom-0 flex flex-row sm:flex-col justify-evenly sm:justify-start sm:top-16 overflow-y-auto z-6`}
      >
        <div className="flex flex-row justify-evenly sm:flex-col sm:justify-center">
          <Link to={"/"}>
            <SidebarList
              title={sidebarContents[0].title}
              icon={sidebarContents[0].icon}
            />
          </Link>

          <div className="flex flex-row justify-evenly sm:flex-col sm:justify-center">
            {sidebarContents.slice(1, 4).map((content) => {
              const { title, icon, id } = content;
              return <SidebarList key={id} title={title} icon={icon} />;
            })}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen
              ? "sm:hidden xl:block hidden"
              : "sm:block xl:hidden hidden"
          }`}
        >
          <p className="border-t border-gray-300 my-4"></p>

          {sidebarContents.slice(4, 8).map((content) => {
            const { title, icon, id } = content;
            return <SidebarList key={id} title={title} icon={icon} />;
          })}

          <p className="border-t border-gray-300 my-4"></p>

          <h3 className="ml-5 font-bold mb-2">Explore</h3>

          {sidebarContents.slice(8, 20).map((content) => {
            const { title, icon, id } = content;
            return <SidebarList key={id} title={title} icon={icon} />;
          })}
        </div>
      </aside>
    </>
  );
};

export default SidebarMenu;

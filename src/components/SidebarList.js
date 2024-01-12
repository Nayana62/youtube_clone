import React from "react";
import { useSelector } from "react-redux";

const SidebarList = ({ title, icon, link }) => {
  const { isMenuOpen } = useSelector((store) => store.app);

  return (
    <div
      className={`flex flex-col ${
        isMenuOpen
          ? "sm:flex-col sm:gap-0 xl:gap-5 xl:flex-row"
          : "sm:flex-row sm:gap-5 xl:gap-0 xl:flex-col"
      } items-center  hover:bg-gray-200 py-2 px-4 mx-3 sm:mx-0 rounded-lg cursor-pointer`}
    >
      <img className="w-6" src={icon} alt="" />
      <p
        className={`text-[10px] ${
          isMenuOpen
            ? "sm:text-[10px] xl:text-[14px]"
            : "sm:text-[14px] xl:text-[10px]"
        }  font-medium text-left`}
      >
        {title}
      </p>
    </div>
  );
};

export default SidebarList;

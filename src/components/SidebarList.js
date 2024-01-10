import React from "react";
import { useSelector } from "react-redux";

const SidebarList = ({ title, icon, id }) => {
  const { isMenuOpen } = useSelector((store) => store.app);

  return (
    <div
      key={id}
      className={`flex flex-col ${
        isMenuOpen
          ? "sm:flex-row sm:gap-5 xl:gap-0 xl:flex-col"
          : "sm:flex-col sm:gap-0 xl:gap-5 xl:flex-row"
      } items-center  hover:bg-gray-200 py-2 px-4 rounded-lg cursor-pointer`}
    >
      <img className="w-6" src={icon} alt="" />
      <p
        className={`text-[10px] ${
          isMenuOpen
            ? "sm:text-[14px] xl:text-[10px]"
            : "sm:text-[10px] xl:text-[14px]"
        }  font-medium text-left`}
      >
        {title}
      </p>
    </div>
  );
};

export default SidebarList;

import React from "react";

const WatchSidebarList = ({ title, icon }) => {
  return (
    <div
      className={`flex flex-row gap-5 items-center  hover:bg-gray-200 py-2 px-4 rounded-lg cursor-pointer`}
    >
      <img className="w-6" src={icon} alt="" />
      <p className={`text-[14px]  font-medium text-left`}>{title}</p>
    </div>
  );
};

export default WatchSidebarList;

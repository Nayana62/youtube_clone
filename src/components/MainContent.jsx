import React from "react";
import { useSelector } from "react-redux";

const MainContent = ({ children, className = "" }) => {
  const { isMenuOpen } = useSelector((store) => store.app);

  return (
    <div
      className={`overflow-y-auto w-full h-full sm:w-[calc(100%-6rem)] pt-3 pl-2 sm:px-0 relative top-0 sm:top-28 left-0 ${
        isMenuOpen
          ? " sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
          : "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
      } z-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default MainContent;

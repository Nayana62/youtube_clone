import React from "react";
import { useSelector } from "react-redux";

const MainComponent = () => {
  const { isMenuOpen } = useSelector((store) => store.app);

  return (
    <main
      className={`overflow-y-auto w-full sm:w-[calc(100%-6rem)] pt-3 sm:px-0 relative top-0 sm:top-28 left-0  ${
        isMenuOpen
          ? "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
          : " sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
      } z-5`}
    ></main>
  );
};

export default MainComponent;

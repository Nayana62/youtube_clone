import React from "react";
import { useSelector } from "react-redux";
import ButtonsList from "./ButtonsList";
import { suggestions } from "../constants/suggestions";

const SearchButtons = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  return (
    <div
      className={`search-buttons bg-white flex items-center h-12 pl-5 sm:px-0 w-full sm:w-[calc(100%-6rem)] relative sm:fixed overflow-x-auto top-0 sm:top-16 left-0 ${
        isMenuOpen
          ? "sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
          : "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
      } z-10`}
    >
      <ButtonsList suggestions={suggestions} />
    </div>
  );
};

export default SearchButtons;

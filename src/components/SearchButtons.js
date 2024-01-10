import React from "react";
import { useSelector } from "react-redux";

const suggestions = [
  "All",
  "Music",
  "Computer Programming",
  "Comedy",
  "News",
  "Podcasts",
  "Coding",
  "Modi",
  "Cricket",
  "Movies",
  "ReactJS tutorials",
  "Podcasts",
  "Coding",
  "Modi",
  "Cricket",
  "Movies",
  "ReactJS tutorials",
];

const SearchButtons = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  return (
    <div
      className={`search-buttons bg-white flex items-center h-12 ml-3 sm:px-0 w-full sm:w-[calc(100%-6rem)] relative sm:fixed overflow-x-auto top-0 sm:top-16 left-0 ${
        isMenuOpen
          ? "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
          : "sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
      } z-10`}
    >
      {suggestions.map((suggestion, id) => {
        return (
          <button
            key={id}
            className="py-2 px-3 bg-gray-200 rounded-lg mr-4 text-[14px] font-medium whitespace-nowrap"
          >
            {suggestion}
          </button>
        );
      })}
    </div>
  );
};

export default SearchButtons;

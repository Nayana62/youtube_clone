import React from "react";
import { searchFilters } from "../constants/searchFilters";

const SearchFilterButtons = ({ activeFilter, onFilterChange }) => {
  return (
    <>
      {searchFilters.map((filter) => (
        <button
          key={filter.label}
          type="button"
          className={`py-2 px-3 ${
            activeFilter === filter.label ? "bg-black text-white" : "bg-gray-200"
          } rounded-lg mx-2 text-[14px] font-medium whitespace-nowrap`}
          onClick={() => onFilterChange(filter.label)}
        >
          {filter.label}
        </button>
      ))}
    </>
  );
};

export default SearchFilterButtons;

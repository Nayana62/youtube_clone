import React from "react";
import { suggestions } from "../constants/suggestions";

const ButtonsList = () => {
  return (
    <>
      {suggestions.map((suggestion, id) => {
        return (
          <button
            key={id}
            className="py-2 px-3 bg-gray-200 rounded-lg mx-2 text-[14px] font-medium whitespace-nowrap"
          >
            {suggestion}
          </button>
        );
      })}
    </>
  );
};

export default ButtonsList;

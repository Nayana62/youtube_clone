import React from "react";
import { suggestions } from "../constants/suggestions";
import { useNavigate, useSearchParams } from "react-router-dom";

const ButtonsList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const handleButtonClick = (suggestion) => {
    const query = suggestion.replace(" ", "+");
    if (query === "All") {
      navigate("/");
    } else {
      navigate(`/results?search_query=${query}`);
    }
  };

  return (
    <>
      {suggestions.map((suggestion) => {
        return (
          <button
            key={suggestion}
            className={`py-2 px-3  ${
              query === suggestion ? "bg-black text-white" : "bg-gray-200"
            } rounded-lg mx-2 text-[14px] font-medium whitespace-nowrap`}
            onClick={() => handleButtonClick(suggestion)}
          >
            {suggestion}
          </button>
        );
      })}
    </>
  );
};

export default ButtonsList;

import React from "react";
import { suggestions } from "../constants/suggestions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { setActiveSuggestion } from "../redux/scrollSlice";

const isSuggestionActive = (
  suggestion,
  query,
  pathname,
  activeSuggestion
) => {
  if (pathname === "/") {
    return activeSuggestion === suggestion;
  }

  if (suggestion === "All") {
    return false;
  }

  const normalizedQuery = query?.replace(/\+/g, " ") ?? "";
  return normalizedQuery === suggestion;
};

const ButtonsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  const { activeSuggestion } = useSelector((store) => store.scroll);

  const handleButtonClick = (suggestion) => {
    if (location.pathname === "/") {
      dispatch(setActiveSuggestion(suggestion));
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (suggestion === "All") {
      dispatch(setActiveSuggestion("All"));
      navigate("/");
      return;
    }

    const encodedQuery = suggestion.replace(/ /g, "+");
    navigate(`/results?search_query=${encodedQuery}`);
  };

  return (
    <>
      {suggestions.map((suggestion) => {
        const isActive = isSuggestionActive(
          suggestion,
          query,
          location.pathname,
          activeSuggestion
        );

        return (
          <button
            key={suggestion}
            className={`py-2 px-3 ${
              isActive ? "bg-black text-white" : "bg-gray-200"
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

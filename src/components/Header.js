import React, { useEffect, useState } from "react";
import Logo from "../assets/youtube_logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../redux/cacheSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../constants/constants";

const Header = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.cache);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSearch = (e, search) => {
    e.preventDefault();
    if (search !== "") {
      const query = search.replace(" ", "+");
      navigate(`/results?search_query=${query}`);
      handleScrollTop();
      setShowSuggestions(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);

      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <header className="bg-white h-16 relative sm:fixed w-full px-4 sm:px-6 z-40 flex items-center justify-between">
      <div className="flex items-center">
        <div onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hidden sm:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <Link to={"/"}>
          <img
            src={Logo}
            alt="youtube_logo"
            className="h-14 ml-0 sm:ml-4 cursor-pointer"
          />
        </Link>
      </div>
      <form className="flex-1 flex justify-center relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            // Delay hiding suggestions to allow time for click events
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          className="w-8/12 sm:w-5/12 py-1 px-2 sm:px-3 sm:py-2 xl:ml-16 rounded-l-full border border-[#ccc] outline-1 outline-blue-700"
        />
        <button
          onClick={(e) => handleSearch(e, searchQuery)}
          className="hidden"
        />
        <button
          onClick={(e) => handleSearch(e, searchQuery)}
          className=" hover:bg-gray-200 rounded-r-full sm:py-2 px-4 border border-[#ccc] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        {showSuggestions && (
          <div className="absolute z-50 bg-white top-10 sm:top-14 left-1/2 -translate-x-1/2 w-[8rem] xs:w-[12rem] sm:w-[17rem] md:w-[20rem] lg:w-[26rem] xl:w-[30rem] 2xl:w-[34rem] rounded-lg shadow-xl border-x border-gray-400">
            {suggestions.map((suggestion) => (
              <p
                className="px-5 py-2 hover:bg-gray-200 cursor-pointer"
                key={suggestion}
                onClick={(e) => handleSearch(e, suggestion)}
              >
                {suggestion}
              </p>
            ))}
          </div>
        )}
      </form>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import SearchButtons from "../components/SearchButtons";
import { getSearchResults } from "../fetchData/getSearchResults";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorPage from "../components/ErrorPage";
import SearchResultsContainer from "../components/SearchResultsContainer";

const SearchResults = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    getSearchResults(query, setSearchResults);
  }, [query]);

  return (
    <>
      <SearchButtons />
      <div
        className={`overflow-y-auto w-full h-full sm:w-[calc(100%-6rem)] pt-3 pl-2 sm:px-0 relative top-0 sm:top-28 left-0  ${
          isMenuOpen
            ? " sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
            : "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
        } z-10`}
      >
        {searchResults.error ? (
          <ErrorPage error={searchResults.error} />
        ) : (
          <div>
            {searchResults.length !== 0 && (
              <div className="m-auto max-w-6xl px-10">
                {searchResults.map((video) => {
                  return <SearchResultsContainer video={video} />;
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;

import React, { useEffect, useState } from "react";
import SearchButtons from "../components/SearchButtons";
import SearchFilterButtons from "../components/SearchFilterButtons";
import { getSearchResults } from "../fetchData/getSearchResults";
import { cacheChannelsForVideos } from "../fetchData/cacheChannelsForVideos";
import { getSearchVideos } from "../utils/normalizeSearchVideo";
import { searchFilters } from "../constants/searchFilters";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import ErrorPage from "../components/ErrorPage";
import SearchResultsContainer from "../components/SearchResultsContainer";

const SearchResults = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { isMenuOpen } = useSelector((store) => store.app);
  const [searchResults, setSearchResults] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    setActiveFilter("All");
  }, [query]);

  useEffect(() => {
    const order =
      searchFilters.find((filter) => filter.label === activeFilter)?.order ??
      "relevance";

    getSearchResults(query, setSearchResults, order);
  }, [query, activeFilter]);

  useEffect(() => {
    if (searchResults.error || searchResults.length === 0) return;

    const videos = getSearchVideos(searchResults);
    cacheChannelsForVideos(videos, dispatch, store.getState.bind(store));
  }, [searchResults, dispatch, store]);

  return (
    <>
      <SearchButtons>
        <SearchFilterButtons
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </SearchButtons>
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
                {searchResults.map((video) => (
                  <SearchResultsContainer
                    key={
                      video.id.videoId ||
                      video.id.channelId ||
                      video.id.playlistId
                    }
                    video={video}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResults;

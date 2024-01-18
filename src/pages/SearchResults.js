import React, { useEffect, useState } from "react";
import SearchButtons from "../components/SearchButtons";
import { getSearchResults } from "../fetchData/getSearchResults";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import Channel from "../components/Channel";
import ErrorPage from "../components/ErrorPage";

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
                  return (
                    <Link
                      to={"/watch?v=" + video?.id?.videoId}
                      key={
                        video.id.videoId ||
                        video.id.channelId ||
                        video.id.playlistId
                      }
                    >
                      {video?.id?.kind !== "youtube#playlist" && (
                        <div className="flex gap-2 relative">
                          <img
                            src={video?.snippet?.thumbnails?.medium?.url}
                            alt="thumbnail"
                            className={` mb-5 ${
                              video?.id?.kind === "youtube#channel"
                                ? "rounded-full w-2/12 h-[12rem] mx-[5rem]"
                                : "rounded-xl w-4/12 h-[12rem]"
                            }`}
                          />
                          <div className=" w-8/12">
                            <h2 className=" text-lg">
                              {video?.snippet?.title}
                            </h2>
                            <p className=" text-[14px] text-[#606060] ml-1">
                              {moment(video?.snippet?.publishedAt).fromNow()}
                            </p>
                            <div className=" my-4">
                              <Channel channelId={video?.snippet?.channelId} />
                            </div>
                            <p className=" text-xs my-4">
                              {video?.snippet?.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </Link>
                  );
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

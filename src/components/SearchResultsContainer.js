import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Channel from "./Channel";

const SearchResultsContainer = ({ video }) => {
  return (
    <Link
      to={"/watch?v=" + video?.id?.videoId}
      key={video.id.videoId || video.id.channelId || video.id.playlistId}
    >
      {video?.id?.kind !== "youtube#playlist" && (
        <div className="flex flex-col sm:flex-row gap-2 relative">
          <img
            src={video?.snippet?.thumbnails?.medium?.url}
            alt="thumbnail"
            className={` mb-5 ${
              video?.id?.kind === "youtube#channel"
                ? "rounded-full w-full sm:w-2/12 h-[12rem] mx-[5rem]"
                : "rounded-xl w-full sm:w-4/12 h-[12rem]"
            }`}
          />
          <div className="w-full sm:w-8/12">
            <h2 className=" text-lg">{video?.snippet?.title}</h2>
            <p className=" text-[14px] text-[#606060] ml-1">
              {moment(video?.snippet?.publishedAt).fromNow()}
            </p>
            <div className=" my-4">
              <Channel channelId={video?.snippet?.channelId} />
            </div>
            <p className=" text-xs my-4">{video?.snippet?.description}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default SearchResultsContainer;

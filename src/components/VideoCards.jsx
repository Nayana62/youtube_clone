import React from "react";
import { truncateText } from "./TruncateText";
import NumberFormatter from "./NumberFormatter";
import moment from "moment";
import ChannelAvatar from "./ChannelAvatar";

const VideoCards = ({ info, channel }) => {
  const { snippet, statistics } = info;

  const {
    title,
    thumbnails,
    channelTitle,
    publishedAt,
  } = snippet;

  const { viewCount } = statistics || {};

  return (
    <div className="w-[95%] h-full flex flex-col pl-2">
      {/* Thumbnail */}
      <img
        className="w-full rounded-xl mb-3"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />

      {/* Video information */}
      <div className="flex gap-3">
        {/* Channel image */}
        <ChannelAvatar
          src={channel?.snippet?.thumbnails?.medium?.url}
          name={channel?.snippet?.title || snippet.channelTitle}
          className="w-9 h-9 rounded-full"
        />

        {/* Text information */}
        <div className="flex flex-col min-w-0">
          {/* Title */}
          <h3 className="whitespace-normal break-words text-[15px] font-medium leading-5">
            {truncateText(title, 90)}
          </h3>

          {/* Channel */}
          <p className="text-[14px] text-[#606060] mt-1">
            {channelTitle}
          </p>

          {/* Views + date */}
          <div className="flex">
            {viewCount != null && (
              <>
                <p className="text-[14px] text-[#606060] mr-1">
                  <NumberFormatter number={viewCount} />
                  views
                </p>

                <p className="text-[#606060]">&#8226;</p>
              </>
            )}

            <p
              className={`text-[14px] text-[#606060] ${
                viewCount != null ? "ml-1" : ""
              }`}
            >
              {moment(publishedAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;

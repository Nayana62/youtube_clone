import React from "react";
import { truncateText } from "./TruncateText";
import NumberFormatter from "./NumberFormatter";
import moment from "moment";

const SuggestedVideos = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex gap-1">
      <img
        className="w-48 rounded-xl mb-2"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex flex-col">
        <h3 className="whitespace-normal break-words text-[13px] font-medium">
          {truncateText(title, 42)}
        </h3>
        <p className=" text-[12px] text-[#606060]">{channelTitle}</p>
        <div className="flex items-center">
          <p className=" text-[14px] text-[#606060] mr-1">
            <NumberFormatter number={viewCount} /> views
          </p>
          <p className="text-[#606060]"> &#8226; </p>
          <p className=" text-[12px] text-[#606060] ml-1">
            {moment(publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideos;

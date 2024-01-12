import React from "react";
import { truncateText } from "./TruncateText";
import NumberFormatter from "./NumberFormatter";
import moment from "moment";

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <>
      <img
        className="w-full rounded-xl mb-2"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <h3 className="whitespace-normal break-words text-[15px] font-medium">
        {truncateText(title, 90)}
      </h3>
      <p className=" text-[14px] text-[#606060]">{channelTitle}</p>
      <div className="flex">
        <p className=" text-[14px] text-[#606060] mr-1">
          <NumberFormatter number={viewCount} /> views
        </p>
        <p className="text-[#606060]"> &#8226; </p>
        <p className=" text-[14px] text-[#606060] ml-1">
          {moment(publishedAt).fromNow()}
        </p>
      </div>
    </>
  );
};

export default VideoCards;

import React, { useEffect, useState } from "react";
import { getChannelData } from "../fetchData/getChannelData";
import NumberFormatter from "./NumberFormatter";

const Channel = ({ channelId }) => {
  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    getChannelData(channelId, setChannelData);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex gap-2 items-center">
      <img
        className="w-12 h-12 rounded-full"
        src={channelData?.snippet?.thumbnails?.medium.url}
        alt=""
      />

      <div className="flex flex-col">
        <p className=" font-semibold ">{channelData?.snippet?.title}</p>
        <p className=" text-[14px] text-[#606060]">
          <NumberFormatter number={channelData?.statistics?.subscriberCount} />
          subscribers
        </p>
      </div>
    </div>
  );
};

export default Channel;

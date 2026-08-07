import React from "react";
import { useSelector } from "react-redux";
import NumberFormatter from "./NumberFormatter";
import ChannelAvatar from "./ChannelAvatar";

const Channel = ({ channelId }) => {
  const channel = useSelector((store) => store.scroll.channels[channelId]);

  return (
    <div className="flex gap-2 items-center">
      <ChannelAvatar
        src={channel?.snippet?.thumbnails?.medium?.url}
        name={channel?.snippet?.title}
        className="w-12 h-12 rounded-full"
      />

      <div className="flex flex-col">
        <p className=" font-semibold ">{channel?.snippet?.title}</p>
        <p className=" text-[14px] text-[#606060]">
          <NumberFormatter number={channel?.statistics?.subscriberCount} />
          subscribers
        </p>
      </div>
    </div>
  );
};

export default Channel;

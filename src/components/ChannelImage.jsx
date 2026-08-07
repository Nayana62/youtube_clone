import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../constants/constants";

const ChannelImage = ({ channelId }) => {
  const [channelImage, setChannelImage] = useState("");

  useEffect(() => {
    const getChannelImage = async () => {
      try {
        const API = YOUTUBE_CHANNEL_API.replace("%CHANNEL_ID%", channelId);

        const response = await fetch(API);
        const json = await response.json();

        const image =
          json.items?.[0]?.snippet?.thumbnails?.default?.url;

        setChannelImage(image);
      } catch (error) {
        console.log("Error fetching channel image:", error);
      }
    };

    getChannelImage();
  }, [channelId]);

  return (
    <div className="w-9 h-9 flex-shrink-0">
      {channelImage && (
        <img
          src={channelImage}
          alt="channel"
          className="w-9 h-9 rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default ChannelImage;

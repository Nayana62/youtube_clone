import { YOUTUBE_CHANNEL_API } from "../constants/constants";

export const getChannelData = async (channelId, setChannelData) => {
  const API = YOUTUBE_CHANNEL_API.replace("%CHANNEL_ID%", channelId);

  try {
    const data = await fetch(API);
    const json = await data.json();
    setChannelData(json.items[0] || json);
  } catch (error) {
    console.log("error", error);
  }
};

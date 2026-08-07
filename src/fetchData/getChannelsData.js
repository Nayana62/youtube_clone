import { YOUTUBE_CHANNEL_API } from "../constants/constants";

export const getChannelsData = async (channelIds) => {
  if (!channelIds.length) return [];

  try {
    const API = YOUTUBE_CHANNEL_API.replace(
      "%CHANNEL_IDS%",
      channelIds.join(",")
    );

    const response = await fetch(API);
    const json = await response.json();

    return json.items || [];
  } catch (error) {
    console.log("Error fetching channel data:", error);
    return [];
  }
};

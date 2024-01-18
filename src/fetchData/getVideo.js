import { YOUTUBE_VIDEO_API } from "../constants/constants";

export const getVideo = async (videoId, setVideo) => {
  const API = YOUTUBE_VIDEO_API.replace("%VIDEO_ID%", videoId);
  try {
    const data = await fetch(API);
    const json = await data.json();
    setVideo(json.items[0] || json);
  } catch (error) {
    console.log("error", error);
  }
};

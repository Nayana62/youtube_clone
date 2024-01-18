import { YOUTUBE_SUGGESTED_VIDEOS_API } from "../constants/constants";

export const getVideos = async (setVideosList) => {
  const API = YOUTUBE_SUGGESTED_VIDEOS_API;
  try {
    const data = await fetch(API);
    const json = await data.json();
    setVideosList(json.items || json);
  } catch (error) {
    console.log("error", error);
  }
};

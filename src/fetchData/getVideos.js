const API = process.env.REACT_APP_YOUTUBE_API;

export const getVideos = async (setVideosList) => {
  try {
    const data = await fetch(API);
    const json = await data.json();
    setVideosList(json.items);
  } catch (error) {
    console.log("error", error);
  }
};

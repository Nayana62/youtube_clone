export const getVideos = async (setVideosList) => {
  const API = process.env.REACT_APP_YOUTUBE_VIDEOS_API;
  try {
    const data = await fetch(API);
    const json = await data.json();
    setVideosList(json.items || json);
  } catch (error) {
    console.log("error", error);
  }
};

export const getChannelData = async (channelId, setChannelData) => {
  const API = process.env.REACT_APP_YOUTUBE_CHANNEL_API.replace(
    "%CHANNEL_ID%",
    channelId
  );

  try {
    const data = await fetch(API);
    const json = await data.json();
    setChannelData(json.items[0] || json);
  } catch (error) {
    console.log("error", error);
  }
};

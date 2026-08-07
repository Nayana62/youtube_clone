import { getChannelsData } from "./getChannelsData";
import { addChannels } from "../redux/scrollSlice";

export const cacheChannelsForVideos = async (videos, dispatch, getState) => {
  const channelIds = [
    ...new Set(videos.map((video) => video.snippet.channelId)),
  ];
  const cachedChannels = getState().scroll.channels;
  const missingChannelIds = channelIds.filter((id) => !cachedChannels[id]);

  if (missingChannelIds.length > 0) {
    const channelsData = await getChannelsData(missingChannelIds);
    dispatch(addChannels(channelsData));
  }
};

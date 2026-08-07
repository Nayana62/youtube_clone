import { addChannels } from "../redux/scrollSlice";
import { getChannelsData } from "./getChannelsData";

export const fetchMissingChannels = async (dispatch, getState, videos) => {
  if (!videos?.length || videos.error) return;

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

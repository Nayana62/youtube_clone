export const normalizeSearchVideo = (item) => ({
  id: item.id.videoId,
  snippet: item.snippet,
  statistics: item.statistics || {},
});

export const getSearchVideos = (results) =>
  (results || [])
    .filter((item) => item.id?.kind === "youtube#video")
    .map(normalizeSearchVideo);

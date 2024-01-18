export const OFFSET_LIVE_CHAT = 20;

export const OFFSET_SCROLL = 15;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=6&pageToken=%PAGE_TOKEN%&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SUGGESTED_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=%VIDEO_ID%&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=%CHANNEL_ID%&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=%QUERY%&key=" +
  process.env.REACT_APP_API_KEY;

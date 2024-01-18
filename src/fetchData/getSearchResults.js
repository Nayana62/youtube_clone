import { YOUTUBE_SEARCH_API } from "../constants/constants";

export const getSearchResults = async (query, setSearchResults) => {
  const API = YOUTUBE_SEARCH_API.replaceAll("%QUERY%", query);

  try {
    const data = await fetch(API);
    const json = await data.json();
    setSearchResults(json.items || json);
  } catch (error) {
    console.log("error", error.message);
  }
};

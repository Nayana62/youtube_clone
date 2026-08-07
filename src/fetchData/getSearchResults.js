import { YOUTUBE_SEARCH_API } from "../constants/constants";

export const fetchSearchResults = async (query, order = "relevance") => {
  if (!query) return [];

  const API = YOUTUBE_SEARCH_API.replace(
    "%QUERY%",
    encodeURIComponent(query)
  ).replace("%ORDER%", order);

  try {
    const data = await fetch(API);
    const json = await data.json();
    return json.items || [];
  } catch (error) {
    console.log("error", error.message);
    return [];
  }
};

export const getSearchResults = async (query, setSearchResults, order = "relevance") => {
  const items = await fetchSearchResults(query, order);
  setSearchResults(items);
};

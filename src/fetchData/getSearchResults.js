export const getSearchResults = async (query, setSearchResults) => {
  const API = process.env.REACT_APP_YOUTUBE_SEARCH_API.replaceAll(
    "%QUERY%",
    query
  );

  try {
    const data = await fetch(API);
    const json = await data.json();
    setSearchResults(json.items || json);
  } catch (error) {
    console.log("error", error.message);
  }
};

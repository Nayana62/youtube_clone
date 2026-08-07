import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import SearchButtons from "../components/SearchButtons";
import MainContent from "../components/MainContent";
import VideoGrid from "../components/VideoGrid";
import { addVideosList, setVideos } from "../redux/scrollSlice";
import { YOUTUBE_VIDEOS_API } from "../constants/constants";
import { cacheChannelsForVideos } from "../fetchData/cacheChannelsForVideos";
import { fetchSearchResults } from "../fetchData/getSearchResults";
import { getSearchVideos } from "../utils/normalizeSearchVideo";

const Home = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { videos, activeSuggestion } = useSelector((store) => store.scroll);
  const [loading, setLoading] = useState(true);
  const isAllCategory = activeSuggestion === "All";

  const getPopularVideos = async (pageToken) => {
    try {
      const API = YOUTUBE_VIDEOS_API.replace("%PAGE_TOKEN%", pageToken);
      const data = await fetch(API);
      const json = await data.json();

      if (pageToken) {
        dispatch(addVideosList(json));
      } else {
        dispatch(setVideos(json.items || []));
      }

      await cacheChannelsForVideos(
        json.items,
        dispatch,
        store.getState.bind(store)
      );
      localStorage.setItem("pageToken", json.nextPageToken);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadCategoryVideos = async (suggestion) => {
    setLoading(true);

    try {
      if (suggestion === "All") {
        localStorage.setItem("pageToken", "");
        await getPopularVideos("");
        return;
      }

      const results = await fetchSearchResults(suggestion);
      const normalizedVideos = getSearchVideos(results);
      dispatch(setVideos(normalizedVideos));
      await cacheChannelsForVideos(
        normalizedVideos,
        dispatch,
        store.getState.bind(store)
      );
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const handleOnScrollFetchData = () => {
    if (!isAllCategory) return;

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setTimeout(() => {
        getPopularVideos(localStorage.getItem("pageToken"));
      }, 1000);
    }
  };

  useEffect(() => {
    loadCategoryVideos(activeSuggestion);
    // eslint-disable-next-line
  }, [activeSuggestion]);

  useEffect(() => {
    if (!isAllCategory) return;

    window.addEventListener("scroll", handleOnScrollFetchData);
    return () => {
      window.removeEventListener("scroll", handleOnScrollFetchData);
    };
    // eslint-disable-next-line
  }, [isAllCategory]);

  return (
    <>
      <SearchButtons />
      <MainContent>
        <VideoGrid videos={videos} loading={loading} />
      </MainContent>
    </>
  );
};

export default Home;

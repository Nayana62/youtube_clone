import React, { useEffect, useState } from "react";
import VideoCards from "../components/VideoCards";
import ShimmerHome from "../components/ShimmerHome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../fetchData/getVideos";
import SearchButtons from "../components/SearchButtons";
import { addVideosList } from "../redux/scrollSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((store) => store.app);
  const { videos } = useSelector((store) => store.scroll);
  const [loading, setLoading] = useState(true);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOnScrollFetchData = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setTimeout(() => {
        console.log("timeout");
        getVideos(localStorage.getItem("pageToken"));
      }, 1000);
    }
  };

  useEffect(() => {
    getVideos("");
    window.addEventListener("scroll", handleOnScrollFetchData);
    return () => {
      window.removeEventListener("scroll", handleOnScrollFetchData);
    };
    // eslint-disable-next-line
  }, []);

  const getVideos = async (pageToken) => {
    try {
      const API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=6&pageToken=${pageToken}&regionCode=IN&key=AIzaSyBTHY8ovhCI7JHXvKQ0kDFM0h0QfnfAIjs`;
      const data = await fetch(API);
      const json = await data.json();
      dispatch(addVideosList(json));
      localStorage.setItem("pageToken", json.nextPageToken);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <SearchButtons />
      <div
        className={`overflow-y-auto w-full h-full sm:w-[calc(100%-6rem)] pt-3 pl-2 sm:px-0 relative top-0 sm:top-28 left-0  ${
          isMenuOpen
            ? " sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
            : "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
        } z-10`}
      >
        <div>
          {videos.length === 0 ? (
            <ShimmerHome />
          ) : (
            <div className="home grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2 ">
              {videos.map((video, index) => (
                <Link
                  key={index}
                  to={"/watch?v=" + video.id}
                  onClick={handleScrollTop}
                >
                  <VideoCards info={video} loading={loading} />
                </Link>
              ))}
              {loading && <ShimmerHome VideoCards={videos.length} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

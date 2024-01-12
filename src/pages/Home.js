import React, { useEffect, useState } from "react";
import VideoCards from "../components/VideoCards";
import ShimmerHome from "../components/ShimmerHome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getVideos } from "../fetchData/getVideos";

const Home = () => {
  const { isMenuOpen } = useSelector((store) => store.app);
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    getVideos(setVideosList);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={`overflow-y-auto w-full h-full sm:w-[calc(100%-6rem)] pt-3 pl-2 sm:px-0 relative top-0 sm:top-28 left-0  ${
        isMenuOpen
          ? " sm:left-24 xl:left-56 xl:w-[calc(100%-14rem)]"
          : "sm:left-56 xl:left-24 xl:w-[calc(100%-6rem)]"
      } z-6`}
    >
      {videosList.length === 0 ? (
        <ShimmerHome />
      ) : (
        <div className="home grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2 ">
          {videosList.map((videos) => {
            return (
              <Link key={videos.id} to={"/watch?v=" + videos.id}>
                <div className="w-[95%] h-[100%] flex flex-col pl-2">
                  <VideoCards info={videos} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeWatchMenu } from "../redux/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { getVideos } from "../fetchData/getVideos";
import SuggestedVideos from "../components/SuggestedVideos";
import SearchButtons from "../components/SearchButtons";
import ButtonsList from "../components/ButtonsList";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    dispatch(closeWatchMenu());
    getVideos(setVideosList);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="watch-video overflow-y-auto h-full w-[calc(100%-24rem)] relative top-16 px-5 pl-12 left-0  z-6">
        <div>
          <iframe
            width="100%"
            height="480"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
        <div>
          <ul className="">
            <li>Title</li>
            <li>Like</li>
            <li>Share</li>
            <li>Subscribe</li>
            <li>Title</li>
            <li>Like</li>
            <li>Share</li>
            <li>Subscribe</li>
            <li>Title</li>
            <li>Like</li>
            <li>Share</li>
            <li>Subscribe</li>
            <li>Title</li>
            <li>Like</li>
            <li>Share</li>
            <li>Subscribe</li>
            <li>Title</li>
            <li>Like</li>
            <li>Share</li>
            <li>Subscribe</li>
            <li>Title</li>
            <li>Like</li>
            <li>Share</li>
            <li>Subscribe</li>
          </ul>
        </div>
      </div>
      <div className="search-buttons bg-white flex items-center h-12 w-96 fixed overflow-x-auto top-16 right-0 z-10">
        <ButtonsList />
      </div>
      <div className="suggested-videos w-96 h-full fixed bg-white flex pt-4 top-28 right-0 px-2  overflow-y-auto z-6">
        <div className="">
          {videosList.map((videos) => {
            return (
              <Link key={videos.id} to={"/watch?v=" + videos.id}>
                <SuggestedVideos info={videos} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeWatchMenu } from "../redux/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { getVideos } from "../fetchData/getVideos";
import SuggestedVideos from "../components/SuggestedVideos";
import ButtonsList from "../components/ButtonsList";
import { getVideo } from "../fetchData/getVideo";
import Channel from "../components/Channel";
import LiveChat from "../components/LiveChat";
import ErrorPage from "../components/ErrorPage";
import CommentsContainer from "../components/CommentsContainer";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [video, setVideo] = useState(null);
  const [videosList, setVideosList] = useState([]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(closeWatchMenu());
    getVideos(setVideosList);
    getVideo(videoId, setVideo);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {videosList.error ? (
        <ErrorPage error={videosList.error} />
      ) : (
        <div className=" block lg:flex">
          <div className="watch-video overflow-y-auto  h-full w-full lg:w-8/12 relative sm:top-16 px-5 pt-0 sm:pt-6 pl-5 xl:pl-20 left-0  z-6">
            <div>
              <iframe
                width="100%"
                height="520"
                src={"https://www.youtube.com/embed/" + videoId}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
              {video !== null && (
                <>
                  <div className=" font-bold text-xl my-2">
                    {video?.snippet?.title}
                  </div>

                  <div className="flex items-center mb-4">
                    <Channel channelId={video.snippet.channelId} />
                    <button className=" ml-5 bg-black px-4 py-2 rounded-3xl text-sm font-semibold text-white">
                      Subscribe
                    </button>
                  </div>
                </>
              )}
              <CommentsContainer />
            </div>
          </div>
          <div className="hidden w-4/12 lg:block">
            <LiveChat />
            <div className="relative top-[6rem]">
              <div className="search-buttons bg-white flex items-center h-12 w-[22rem] xl:w-[25rem] relative overflow-x-auto top-0 right-0 z-10">
                <ButtonsList />
              </div>
            </div>
            <div className="suggested-videos w-[25rem] relative right-0 top-[7rem] z-6">
              {videosList.length !== 0 && (
                <div className="">
                  {videosList
                    .filter((videos) => videos.id !== videoId)
                    .map((videos) => {
                      return (
                        <Link
                          key={videos.id}
                          to={"/watch?v=" + videos.id}
                          onClick={handleScrollTop}
                        >
                          <SuggestedVideos info={videos} />
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WatchVideo;

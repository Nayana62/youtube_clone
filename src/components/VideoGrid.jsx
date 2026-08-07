import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCards from "./VideoCards";
import ShimmerHome from "./ShimmerHome";

const VideoGrid = ({
  videos,
  loading = false,
  excludeVideoId,
  initialShimmerCount = 9,
}) => {
  const { channels } = useSelector((store) => store.scroll);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredVideos = excludeVideoId
    ? videos.filter((video) => video.id !== excludeVideoId)
    : videos;

  if (filteredVideos.length === 0 && loading) {
    return <ShimmerHome count={initialShimmerCount} />;
  }

  if (filteredVideos.length === 0) {
    return null;
  }

  return (
    <div className="home grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
      {filteredVideos.map((video, index) => (
        <Link
          key={video.id ?? index}
          to={"/watch?v=" + video.id}
          onClick={handleScrollTop}
        >
          <VideoCards
            info={video}
            channel={channels[video.snippet.channelId]}
          />
        </Link>
      ))}

      {loading && <ShimmerHome count={3} inline />}
    </div>
  );
};

export default VideoGrid;

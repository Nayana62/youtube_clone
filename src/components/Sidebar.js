import React from "react";
import HomeOutlined from "../assets/homeOutlined.svg";
import shortsOutlined from "../assets/shortsOutlined.svg";
import subscriptionsOutlined from "../assets/subscriptionsOutlined.svg";
import library from "../assets/library.svg";
import yourChannel from "../assets/yourChannel.svg";
import history from "../assets/history.svg";
import yourVideos from "../assets/yourVideos.svg";
import watchLater from "../assets/watchLater.svg";
import trending from "../assets/trending.svg";
import shopping from "../assets/shopping.svg";
import music from "../assets/music.svg";
import movies from "../assets/movies.svg";
import live from "../assets/live.svg";
import gaming from "../assets/gaming.svg";
import news from "../assets/news.svg";
import sports from "../assets/sports.svg";
import learning from "../assets/learning.svg";
import fashion from "../assets/fashion.svg";
import podcasts from "../assets/podcasts.svg";
import { useSelector } from "react-redux";
import SidebarList from "./SidebarList";

const sidebarContents = [
  {
    id: 1,
    title: "Home",
    icon: HomeOutlined,
  },
  {
    id: 2,
    title: "Shorts",
    icon: shortsOutlined,
  },
  {
    id: 3,
    title: "Subscriptions",
    icon: subscriptionsOutlined,
  },
  {
    id: 4,
    title: "Library",
    icon: library,
  },
  {
    id: 5,
    title: "Your channel",
    icon: yourChannel,
  },
  {
    id: 6,
    title: "History",
    icon: history,
  },
  {
    id: 7,
    title: "Your videos",
    icon: yourVideos,
  },
  {
    id: 8,
    title: "Watch later",
    icon: watchLater,
  },
  {
    id: 9,
    title: "Trending",
    icon: trending,
  },
  {
    id: 10,
    title: "Shopping",
    icon: shopping,
  },
  {
    id: 11,
    title: "Music",
    icon: music,
  },
  {
    id: 12,
    title: "Movies",
    icon: movies,
  },
  {
    id: 13,
    title: "Live",
    icon: live,
  },
  {
    id: 14,
    title: "Gaming",
    icon: gaming,
  },
  {
    id: 15,
    title: "News",
    icon: news,
  },
  {
    id: 16,
    title: "Sports",
    icon: sports,
  },
  {
    id: 17,
    title: "Learning",
    icon: learning,
  },
  {
    id: 18,
    title: "Fashion & Beauty",
    icon: fashion,
  },
  {
    id: 19,
    title: "Podcasts",
    icon: podcasts,
  },
];

const Sidebar = () => {
  const { isMenuOpen } = useSelector((store) => store.app);

  return (
    <>
      <aside
        className={`sidebar ${
          isMenuOpen ? "sm:w-56 xl:w-24" : "sm:w-24 xl:w-56"
        } h-16 pb-20 sm:h-full p-2 sm:pr-8 fixed bg-white bottom-0 flex flex-row sm:flex-col justify-evenly sm:justify-start sm:top-16 overflow-y-auto z-6`}
      >
        {sidebarContents.slice(0, 4).map((content) => {
          const { title, icon, id } = content;
          return <SidebarList title={title} icon={icon} id={id} />;
        })}

        <div
          className={`${
            isMenuOpen ? "sm:block xl:hidden" : "sm:hidden xl:block"
          }`}
        >
          <p className="border-t border-gray-300 my-4"></p>

          {sidebarContents.slice(4, 8).map((content) => {
            const { title, icon, id } = content;
            return <SidebarList title={title} icon={icon} id={id} />;
          })}

          <p className="border-t border-gray-300 my-4"></p>

          <h3 className="ml-5 font-bold mb-2">Explore</h3>

          {sidebarContents.slice(8, 20).map((content) => {
            const { title, icon, id } = content;
            return <SidebarList title={title} icon={icon} id={id} />;
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

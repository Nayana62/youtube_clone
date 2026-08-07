import React from "react";

const ShimmerCard = () => (
  <div className="w-[95%] h-full flex flex-col pl-2 animate-pulse">
    {/* Thumbnail */}
    <div className="w-full aspect-video bg-gray-200 rounded-xl mb-3" />

    {/* Video information */}
    <div className="flex gap-3">
      {/* Channel image */}
      <div className="w-9 h-9 rounded-full bg-gray-200 flex-shrink-0" />

      {/* Text information */}
      <div className="flex flex-col min-w-0 flex-1 gap-2">
        <div className="w-full h-[18px] bg-gray-200 rounded" />
        <div className="w-[60%] h-[14px] bg-gray-200 rounded" />
        <div className="flex gap-2">
          <div className="w-[70px] h-[14px] bg-gray-200 rounded" />
          <div className="w-[100px] h-[14px] bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  </div>
);

const ShimmerHome = ({ count = 6, inline = false }) => {
  const cards = [...Array(count)].map((_, index) => (
    <ShimmerCard key={index} />
  ));

  if (inline) {
    return cards;
  }

  return (
    <div className="home grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
      {cards}
    </div>
  );
};

export default ShimmerHome;

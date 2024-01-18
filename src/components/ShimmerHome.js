import React from "react";
import { Shimmer } from "react-shimmer";

const ShimmerHome = ({ VideoCards }) => {
  const BoxCount = 3 - (VideoCards % 3) + 3 || 3;

  return (
    <>
      {[...Array(BoxCount)].map((_, index) => (
        <div key={index} className="flex flex-col gap-y-4 mr-4">
          <Shimmer width={340} height={200} />
          <Shimmer width={340} height={20} />
          <Shimmer width={250} height={20} />
        </div>
      ))}
    </>
  );
};

export default ShimmerHome;

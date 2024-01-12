import React from "react";
import { Shimmer } from "react-shimmer";

const ShimmerHome = () => {
  return (
    <div className="flex mb-4">
      <Shimmer width={30} height={30}>
        <div className="w-32 h-24 bg-gray-300"></div>
      </Shimmer>
      <div className="flex flex-col ml-4">
        <Shimmer width={30} height={30}>
          <div className="h-4 bg-gray-300 mb-2"></div>
        </Shimmer>
        <Shimmer width={30} height={30}>
          <div className="h-4 bg-gray-300"></div>
        </Shimmer>
      </div>
    </div>
  );
};

export default ShimmerHome;

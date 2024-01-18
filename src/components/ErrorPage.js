import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex mt-20 justify-center items-center">
      <div>
        <p className=" text-2xl sm:text-5xl font-bold mb-2">
          {error.code} error
        </p>
        <p className=" text-lg sm:text-xl">{error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;

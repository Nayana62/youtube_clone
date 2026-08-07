import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <p className=" text-2xl sm:text-5xl font-bold mb-2">{error.code} error</p>
      <p className=" text-lg sm:text-xl">{error.message}</p>
    </div>
  );
};

export default ErrorPage;

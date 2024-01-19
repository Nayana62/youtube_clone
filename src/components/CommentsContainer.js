import React from "react";
import CommentsList from "./CommentsList";
import commentsDummyData from "../constants/commentsDummyData";

const CommentsContainer = () => {
  return (
    <div>
      <h2 className=" font-bold text-lg mb-2">Comments:</h2>
      <CommentsList comments={commentsDummyData} />
    </div>
  );
};

export default CommentsContainer;

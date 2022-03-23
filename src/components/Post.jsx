import React from "react";
import { NavLink } from "react-router-dom";
import ReadMore from "./ReadMore";

const Post = ({ url, imageCover, postCategory, postTitle }) => {
  return (
    <NavLink to={url}>
      <div
        className="h-96 p-4 rounded-xl bg-[length:100%_100%] bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${imageCover})` }}
      >
        <div className="flex flex-col">
          <p className="text-white uppercase mt-4"> {postCategory} </p>
          <h3 className="text-white text-2xl mt-16 font-bold">{postTitle}</h3>
          <ReadMore url={url} className="text-white" />
        </div>
      </div>
    </NavLink>
  );
};

export default Post;

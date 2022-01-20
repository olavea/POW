import React from "react";
import Videos from "./videos";

const VideoLayout = ({ title, html }) => {
  return (
    <>
      <article>
        <h1 className="mark">{title}</h1>
        <div
          className="video-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <div>
        <Videos />
      </div>
    </>
  );
};

export default VideoLayout;

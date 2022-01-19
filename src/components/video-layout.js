import React from "react";
import Videos from "./videos";
// import { Link } from "gatsby";
// <header>
// <Link to="/">
//   <span role="img" aria-label="Navigate home">
//     📺
//   </span>
// </Link>
// </header>


const VideoLayout = ({ title, html }) => {
  return (
    <>
      <article>
        <h1 className="mark">{title}</h1>
        <br />
        <br />
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

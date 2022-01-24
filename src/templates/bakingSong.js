import { graphql } from "gatsby";
import React from "react";
//              S. Sing $id:String
// <div
//             className="video-container"
//             dangerouslySetInnerHTML={{ __html: data.youTubeEmbed.html }}
//           />
export default function bakingSong({ data }) {
    return (
      <>
        <article>
          <h1 className="mark">{data.youTubeEmbed.internal.type}</h1>
          <p>I am preparing a node so I later can get video data from youtube. This title you see over is just the `type` of my home-made-node with only three things inside it:</p>
          <ol>
            <li>id: {data.youTubeEmbed.id}</li>
            <li>type: {data.youTubeEmbed.internal.type} </li>
            <li>contentDigest: {data.youTubeEmbed.internal.contentDigest}</li>
          </ol>
          <h2>And those three things are all you need to create your own node.</h2>
          <p>I used my  pugNode to create this page inside gatsby-node.js</p>
        </article>
      </>
    );
};

export const query = graphql`
  query($catsby: String) {
    youTubeEmbed: pugNode(id: {eq: $catsby}) {
      id
      internal {
        type
        contentDigest
      }
    }
  }
`;


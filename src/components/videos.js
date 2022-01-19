import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import slugify from "@sindresorhus/slugify";

const Videos = () => {
  const data = useStaticQuery(graphql`
  {
    allYouTubeEmBed: allPowTubeOemBed {
      nodes {
        id
        data {
          title
          html
          thumbnail_url
        }
      }
    }
  }
  `);

  return (
    <>
        <ul>
        {data.allYouTubeEmBed.nodes.map((video) => {
            return (
            <li key={video.id}>
                <Link to={`/powtube/${slugify(video.id)}/`}>{video.data.title}</Link>
            </li>
            );
        })}
        </ul>
    </>
  );
};

export default Videos;

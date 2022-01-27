import React from "react";
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const ComponentName = ({data}) => {
  return data.allYouTube.nodes.map((node, index) => {
    const gatsbyImage = getImage(node.thumnail);
    return (
      <article key={index}>
        <GatsbyImage image={gatsbyImage} alt={node.oEmbed.title} />
      </article>
    );
  });
};

export const query = graphql`
  {
    allYouTube {
      nodes {
        oEmbed {
          title
        }
        thumnail {
          childImageSharp {
            gatsbyImageData(
              width: 480
              height: 270
              layout: CONSTRAINED
              transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
    }
  }
`;

export default ComponentName;

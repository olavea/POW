import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "@sindresorhus/slugify";
import InputAdornments from "../components/fake-login";

// styles
// Ola deleted all styles like const pageStyles = {

// data

export const query = graphql`
  {
    allYouTube {
      youTubeImageTreasure: nodes {
        id
        thumnail {
          childImageSharp {
            gatsbyImageData(
              width: 480
              height: 270
              layout: CONSTRAINED
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
        oEmbed {
          title
          html
        }
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  return data.allYouTube.youTubeImageTreasure.map((treasureNode, index) => {
    const gatsbyImage = getImage(treasureNode.thumnail);

    return (
      <main>
        <title>Home Page</title>
        <h1>
          Welcome
          <br />
          <span>to the unfinished</span>
          <br />
          <span>POW! website! </span>
          <span role="img" aria-label="Partying face emoji">
            🥳
          </span>
        </h1>
        <InputAdornments />
        <article key={index}>
          <h2>
            <span>{treasureNode.oEmbed.title}</span>
          </h2>
          <Link to={`/ahoy/${slugify(treasureNode.id)}/`}>
            <GatsbyImage image={gatsbyImage} alt={treasureNode.oEmbed.title} />
          </Link>
        </article>

        <Link to="/ahoy/85b336f8-daa6-5e5c-83cb-bc413a334f77">
          <p>
            Click the image to see the video where Queen @raae tells her story
            about POW!
            <br />
            <span role="img" aria-label="TV emoji">
              📺
            </span>
          </p>
        </Link>
        <h5>
          <p>
            Made with
            <span role="img" aria-label="TV emoji">
              💜
            </span>
            +
            <img
              alt="Gatsby G Logo"
              src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
            +
            <span role="img" aria-label="coffee emoji">
              ☕
            </span>
            by
            <span role="img" aria-label="pirate ship emojis">
              🏴‍☠️⛵
            </span>
            Ola Vea
          </p>
        </h5>
      </main>
    );
  });
};

export default IndexPage;

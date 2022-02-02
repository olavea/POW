import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import { PageLayout } from "../ui-elements/page-layout/PageLayout"
// 13 <PageLayout title={title}>
// import { Claim } from "../ui-elements/claim/Claim"
// 31 {custom === "claim" && <Claim />}
const ComponentName = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, sections } = frontmatter;

  return (
    <>
      {(sections || []).map((section, index) => {
        const { title, plain, custom, img } = section;
        const { html } = section.md?.childMarkdownRemark || {};
        const image = getImage(img?.file);

        console.log(img);

        return (
          <section key={index} className="container">
            {title && <h2>{title}</h2>}
            {image && (
              <GatsbyImage
                class="border border-warning mb-4"
                image={image}
                alt={img?.alt}
              />
            )}

            {plain && (
              <div>
                <p class="lead">{plain}</p>
              </div>
            )}
            {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
          </section>
        );
      })}
    </>
  );
};

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        sections {
          custom
          plain
          title
          img {
            file {
              childImageSharp {
                gatsbyImageData(width: 1200)
              }
            }
            alt
          }
          md {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default ComponentName;

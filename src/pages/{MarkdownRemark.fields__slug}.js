import React from "react";
import { graphql } from "gatsby";

const sectionsForPOWpage = ({ data }) => (
  <pre>{JSON.stringify(data, null, 4)}</pre>
);

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
      fields {
        slug
      }
    }
  }
`;

export default sectionsForPOWpage;
// POW! website / src / pages / {markdownRemark.frontmatter.title}.js
// POW! website / src / pages / {MarkdownFile.fields__slug}.js
// export default function sectionsForPOWpage() {
// }

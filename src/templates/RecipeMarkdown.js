import { graphql } from "gatsby";
import React from "react";
//supplies:
//{data.supplies.id}
export default function SingleGingerBreadPage({ data }) {
  console.log(data);
  return (
    <div>
      <h1>{data.supplies.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.supplies.html }}></div>

      <p>This SingleGingerBreadPage haz id: {data.supplies.id}</p>
    </div>
  );
}

export const query = graphql`
  query MdQuery($catsby: String) {
    supplies: markdownRemark(id: { eq: $catsby }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

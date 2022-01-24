// src/pages/powtube/{powTubeOemBed.id}.js
import React from "react";
import { graphql } from "gatsby";
import VideoLayout from "../../components/video-layout";

//              E. EmbedVideoPage
export default function EmbedOneVideoPage({ data }) {
  return <VideoLayout {...data.youTubeEmbed.data} />;
};
//
//              S. Sing $id:String
export const query = graphql`
  query($id: String) {
    youTubeEmbed: powTubeOemBed(id: { eq: $id }) {

        title
        html

    }
  }
`;
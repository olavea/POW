const axios = require("axios");
const path = require("path");
const {createRemoteFileNode} = require(`gatsby-source-filesystem`);

const IS_PROD = process.env.NODE_ENV === "production";

const fetchEmbed = async (id) => {
  const ytUrl = `https://youtu.be/${id}`;
  const {data} = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: ytUrl,
    },
  });
  return data;
};

const prepYouTubeNode = async (
  id,
  {actions: {createNode}, getCache, createNodeId, createContentDigest}
) => {
  const youTubeNodeId = createNodeId(`you-tube-${id}`);
  const embedData = await fetchEmbed(id);

  const imageFile = await createRemoteFileNode({
    // The source url of the remote file
    url: embedData.thumbnail_url,
    parentNodeId: youTubeNodeId,
    getCache,
    createNode,
    createNodeId,
  });

  createNode({
    id: youTubeNodeId,
    oEmbed: embedData,
    thumnail___NODE: imageFile.id,
    internal: {
      type: `YouTube`,
      contentDigest: createContentDigest(embedData),
    },
  });
};

exports.sourceNodes = async (params, options) => {
  const {youTubeIds = []} = options;
  await Promise.all(youTubeIds.map((id) => prepYouTubeNode(id, params)));
};

exports.createPages = ({actions: {createPage}}) => {
  if (IS_PROD) return;

  const testTemplate = path.resolve(__dirname, `templates/test.js`);

  createPage({
    path: "local-source-youtube-test",
    component: testTemplate,
  });
};

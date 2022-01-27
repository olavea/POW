const axios = require("axios");

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
  {actions: {createNode}, createNodeId, createContentDigest}
) => {
  const embedData = await fetchEmbed(id);

  createNode({
    id: createNodeId(`you-tube-${id}`),
    oEmbed: embedData,
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

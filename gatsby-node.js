const axios = require("axios")

const POW_TUBE_ID = "UGq8cnNTbwI"
async function bakeOneNodeGetOneVideo({actions, createContentDigest}) {
    const oembedVideo = await axios.get("https://www.youtube.com/oembed",
    {params: {
        url: `https://youtu.be/${POW_TUBE_ID}`,
        maxwidth: 1554
    }})

    actions.createNode({
        ...oembedVideo,
        id: POW_TUBE_ID,
        internal: {
            contentDigest: createContentDigest(POW_TUBE_ID),
            type: "powTubeOemBed"
        }
    })
}

exports.sourceNodes = async (params) => {
    await Promise.all([bakeOneNodeGetOneVideo(params)]);
}
// gatsby-node.js
// Full code without error handling const ID_GiGGLES = `UGq8cnNTbwI`;
const axios = require("axios");
const YOUTUBE_IDS = ["Bk1jonYPFD4", "TzJfepDjpzM", "UGq8cnNTbwI"];
const ID_GiGGLES = `UGq8cnNTbwI`;

async function prepYouTubeNode({ actions, createNodeId, createContentDigest }) {
    const embedData = await fetchEmbed(ID_GiGGLES)
    actions.createNode({
        ...embedData,
        id: createNodeId(`you-tube-${ID_GiGGLES}`),
        id: ID_GiGGLES,
        internal: {
            type: `powTubeOemBed`,
            contentDigest: createContentDigest(ID_GiGGLES),

        }
    })
}
// //              G. Get the axios-river to get data for us
const fetchEmbed = async (id) => {
    const ytUrl = `https://youtu.be/${id}`
    try {
        const { data } = await axios.get("https://www.youtube.com/oembed", {
            params: {
              url: ytUrl,
              maxwidth: 1554
            },
          });
          console.log('⛵💀 Yo-Ho Yo-Ho a PiRATEs-node-', data, 'ID!💰');
          return data;

    } catch (error) {
        console.log('⛵💀 Yo-Ho Yo-Ho a PiRATEs-node-', error, 'ID!💰');
    }

};
// const iPrepYouTubeNode = async (
//     id,
//     { actions: { createNode }, createNodeId, createContentDigest }
// ) => {
//     const embedData = await fetchEmbed(id)
//     // //              G. Got: Get the embedData that axios-river got for us
//     createNode({
//         id: createNodeId(`you-tube-${id}`),
//         oembed: embedData,
//         internal: {
//             type: `powTubeOemBed`,
//             contentDigest: createContentDigest(embedData),
//         },
//     });
// };


const prepNode = async (
    { actions: { createNode }, createNodeId, createContentDigest }
) => {
    // //              G. Get embedData later with axios-river g
    //const unEmbedData = await fetchEmbed(ID_GiGGLES);
    // //              I. I prep a pug node
    createNode({
        //id: ID_GiGGLES,
        id: createNodeId(`pug-node-${ID_GiGGLES}`),
        //...unEmbedData,
        internal: {
            type: `pugNode`,
            contentDigest: createContentDigest(ID_GiGGLES),
        },
    });
};

//                 Ruby Catsby and Lilly Owlsby
//                 Baking pages
//                 with Cap'n Granny Sharksby's
//                 createPages hook
async function bakePugIntoGoodies({ graphql, actions }) {
                     console.log('Captain Granny Sharksbys createPages hook💀');
    //              1. bakingSong = Lilly Owlsby sings like a 🦢
    //                 the bakingSong by Cap'n Granny Sharksby 🦢
    const bakingSong = require.resolve('./src/templates/bakingSong.js')
    //                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
    //              2. supplies: data
      const { data } = await graphql(`{
        supplies: allPugNode {
          nodes {
            id

          }
        }
      }`)
    //             3. Loop over the markdown nodes and for each create a page
    // //                 turn them into pages with createPage
        data.supplies.nodes.forEach((ahoyGoodie ) => {
    //                  console.log('🎩', ahoyGoodie.id);
    // // //              A. – B. – C. – DSG 🎩
         actions.createPage({
    // //              A. «Ahoy! Goodie?!»
    // //                 Cap'n Fox shouts and embarks. 🦊
             path: `${ahoyGoodie.id}`,
    // //              B. Owlsby sings badly
    // //                 and bakes baby sharks. 🦈
             component: bakingSong,
    // //              C. Catsby looks tasty
    // //                 Fox gets hungry for kitten. 🐯
           context: {
              catsby: ahoyGoodie.id,
              fox: 'Catsby looks tasty I getz hungry for kitten',
            },
    // // //              D. Don't Show Goodies to Fox
    // // //              and maybe get bitten. DSG–🎩
    // // //              catsby build and look for _ _ _ in terminal 💀
    // //         defer: index + 1 > 2,
    // // //              D. Data tree 🤖🌲
    // // //              E. Every node you must sort 💰
    // // //              F. Fields Forever `fields: ,` 🍓
    // // //              E. forEach index
    // // //              R. RRR! defer: index + 1 > 2 🎩

    // // //              How does Catsby help Lilly make an index of all the toppings?
    // // //              What is the way Lilly makes index travel from
    // // //              D. Data tree 🤖🌲
    // // //              R. RRR! defer: index + 1 > 2 🎩
         })
      });
    }
exports.createPages = async (params) => {
    // create pages dynamically from any data source like for example see below:
    // wait for all promises to be resolved before finishing this function
    await Promise.all([
        bakePugIntoGoodies(params),
    ])
};
exports.sourceNodes = async (params) => {
    await Promise.all([
        prepNode(params),
        prepYouTubeNode(params),
        //iPrepNode(params),
//        iPrepYouTubeNode(params),
        // YOUTUBE_IDS.map((id) =>
        //     prepYouTubeNode(id, params)
        // )
    ]);
};

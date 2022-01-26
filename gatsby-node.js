// POW!-site/gatsby-node.js
const ID_GiGGLES = `eRTJPIa39a4`;
const axios = require("axios");

async function prepPugNode({ actions, createNodeId, createContentDigest }) {
  const { data } = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: `https://youtu.be/${ID_GiGGLES}`,
      maxwidth: 356,
    },
  });
  actions.createNode({
    ...data,
    id: createNodeId(`pug-${ID_GiGGLES}`),
    internal: {
      contentDigest: createContentDigest(ID_GiGGLES),
      type: `pugNode`,
    },
  });
}
//                 Troya Goatsby and Lilly Owlsby are
//                 Baking pages with
//                 Cap'n Granny Sharksby's
//                 createPages hook
async function bakePOWsitePagesFromMarkdown({ graphql, actions }) {
  console.log("Captain Granny Sharksbys createPages hook 💀");
  //              1. bakingSong = Lilly Owslby sings 🦉
  //                 the bakingSong by Cap'n Granny Sharksby
  const bakingSong = require.resolve("./src/templates/RecipeMarkdown.js");
  //                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
  //              2. supplies: data from Markdown files 🌲 in  and _ _ _ drawn
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        nodes {
          id
        }
      }
    }
  `);
  console.log("Got data? 💀", data.supplies.nodes);
  //              3. Loop over the markdown nodes and
  //                 for each bake a page
  data.supplies.nodes.forEach((ahoyGoodie, index) => {
    console.log(
      "Ginger bread ahoyGoodie! id: ",
      ahoyGoodie.id,
      "index: ",
      index
    );
    //            A. – B. – C. – DSG 🎩
    actions.createPage({
      //          A. «Ahoy! Goodie?!»
      //             Cap'n Fox shouts and embarks. 🦊
      path: `${ahoyGoodie.id}`,
      //          B. Owlsby sings badly
      //             and bakes baby sharks. 🦈
      component: bakingSong,
      //          C. Catsby looks tasty
      //             Fox gets hungry for kitten. 🐯
      context: {
        catsby: ahoyGoodie.id,
        fox: "Catsby looks tasty I getz hungry for kitten",
      },
      //          D. DSG 🎩 Piraty mistakes and sharky bugz
      //          D. Don't Show Goodies to Fox
      //             and maybe get bitten.
      defer: index + 1 > 2,
      //              D. Data tree 🤖🌲
      //              E. Every node you must sort 💰
      //              F. Fields Forever `fields: ,` 🍓
      //              E. forEach index
      //              R. RRR! defer: index + 1 > 2 🎩
    });
  });
}

exports.sourceNodes = async (params) => {
  await Promise.all([prepPugNode(params)]);
};

exports.createPages = async (params) => {
  await Promise.all([bakePOWsitePagesFromMarkdown(params)]);
};

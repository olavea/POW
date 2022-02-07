// POW!-site/gatsby-node.js
// const ID_GiGGLES = `eRTJPIa39a4`;
// const axios = require("axios");
const { createFilePath } = require("gatsby-source-filesystem");

// async function prepPugNode({ actions, createNodeId, createContentDigest }) {
//   const { data } = await axios.get("https://www.youtube.com/oembed", {
//     params: {
//       url: `https://youtu.be/${ID_GiGGLES}`,
//       maxwidth: 356,
//     },
//   });
//   actions.createNode({
//     ...data,
//     id: createNodeId(`pug-${ID_GiGGLES}`),
//     internal: {
//       contentDigest: createContentDigest(ID_GiGGLES),
//       type: `pugNode`,
//     },
//   });
// }
//                 Troya Goatsby and Lilly Owlsby are
//                 Baking pages with
//                 Cap'n Granny Sharksby's
//                 createPages hook
async function bakePOWsitePagesFromMarkdown({ graphql, actions }) {
  console.log("Captain Granny Sharksbys createPages hook 💀");
  //              1. bakingSong = Lilly Owslby sings 🦉
  //                 the bakingSong by Cap'n Granny Sharksby
  const bakingSong = require.resolve("./src/templates/RecipeMarkdown.js");
  //                 Look for _ _ _ in http://localhost:8000/_ _ _ /_ _ _  👻
  //              2. supplies: data from Markdown files
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        nodes {
          fields {
            slug
          }
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
      "Ginger bread ahoyGoodie! slug: ",
      ahoyGoodie.fields.slug,
      "index: ",
      index
    );
    //            A. – B. – C. – DSG 🎩
    actions.createPage({
      //          A. «Ahoy! Goodie?!»
      //             Cap'n Fox shouts and embarks. 🦊
      path: `${ahoyGoodie.fields.slug}`,
      //          B. Owlsby sings badly
      //             and bakes baby sharks. 🦈
      component: bakingSong,
      //          C. Catsby looks tasty
      //             Fox gets hungry for kitten. 🐯
      context: {
        catsby: ahoyGoodie.id,
        fox: "Catsby looks tasty I getz hungry for kitten",
      },
      //          D. Don't Show Goodies to Fox
      //             and maybe get bitten.
      //defer: index + 1 > 2,
      //              D. Data tree 🤖🌲
      //              E. Every node you must sort 💰
      //              F. Fields Forever `fields: ,` 🍓
      //              E. forEach index
      //              R. RRR! defer: index + 1 > 2 🎩
    });
  });
}

async function prepPOWmarkdownNode({
  actions,
  createNodeId,
  createContentDigest,
}) {
  actions.createNode({
    id: createNodeId(`md-`),
    internal: {
      contentDigest: createContentDigest(),
      type: `MarkdownRemark`,
    },
  });
}

// exports.sourceNodes = async (params) => {
//   await Promise.all([prepPugNode(params)]);
// };

async function prepPugNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    // https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=files#createfilepath
    createNodeField({
      // 🐛
      name: "slug",
      node,
      value: slug,
    });
  }
}

// POW!-site/gatsby-node.js
async function prepMarkdownRemarkNode({ actions, node, getNode }) {
  // 🔨💰🍓
  const { createNodeField } = actions;
  // my md type of node ... internal
  if (node.internal.type === "MarkdownRemark") {
    // 🐛 = 🔨 + 📁 + 🎢
    const slug = createFilePath({ node, getNode });
    // 🔨💰🍓 ({ 🐛, 💰, Where does this 🐛 slug 🐛 come from 📂?})
    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
}

exports.onCreateNode = async (params) => {
  await Promise.all([prepMarkdownRemarkNode(params)]);
};

exports.createPages = async (params) => {
  await Promise.all([bakePOWsitePagesFromMarkdown(params)]);
};

// exports.onCreateNode = async (params) => {
//   await Promise.all([prepPugNode(params)]);
// };

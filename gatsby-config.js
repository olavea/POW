module.exports = {
  siteMetadata: {
    title: "POW!",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://www.usepow.app", // No trailing slash allowed!
    image: "/pow-logo.png", // Path to the image NOT placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@raae",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "local-source-youtube",
      options: {
        youTubeIdRedStringTreasure: [
          // "UGq8cnNTbwI",
          // "Bk1jonYPFD4",
          // "TzJfepDjpzM",
          "eRTJPIa39a4",
          //  "UGq8cnNTbwI",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
      __key: "content",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
};

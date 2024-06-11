/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `sunny's blog`,
    siteUrl: `https://pithesun.github.io/blog/`,
  },
  pathPrefix: "/blog",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              backgroundColor: "none",
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
  ],
};

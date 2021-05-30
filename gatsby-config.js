/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nodes`,
        path: `${__dirname}/src/nodes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
   
  ],
  siteMetadata:{
    title: 'Wajahat Blog',
    description: 'MERNG Dev',
    copyright: "This website is copyright 2021 Wajahat",
    contact: 'aliwajahat021@gmail.com',
  },
  
}

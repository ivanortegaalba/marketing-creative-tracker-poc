module.exports = {
    siteMetadata: {
        title: `Marketing Archive - Plural Engine`,
        description: `Platform to organize and analyze your marketing assets`,
        author: `Plural Engine`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-fabric-ui`
    ],
    /**
     * This is required to prefix the build with the name of the repo. This is used for Github pages
     */
    pathPrefix: ``
};

const isDeployPreview = process.env.CONTEXT === 'deploy-preview';
const permalink = isDeployPreview ? process.env.DEPLOY_PRIME_URL : 'https://kontena.website';

module.exports = {
  siteMetadata: {
    title: 'Themes and Templates Resources | Kontena Indonesia',
    description:
      'Created for beginner and developer. Suitable in any platform such as HTML CSS, Blogspot, Wordpress, Gatsby, and more.',
    permalink,
    siteUrl: permalink,
    githubUrl: 'https://github.com/chromaui/learnstorybook.com',
    contributeUrl: 'https://github.com/chromaui/learnstorybook.com/#contribute',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/composite/AppLayout.js`),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    ...(process.env.GOOGLE_ANALYTICS_TRACKING_ID && !isDeployPreview
      ? [
          {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
              trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
              head: true,
            },
          },
        ]
      : []),
    ...(process.env.FACEBOOK_PIXEL_ID && !isDeployPreview
      ? [
          {
            resolve: 'gatsby-plugin-facebook-pixel',
            options: {
              pixelId: process.env.FACEBOOK_PIXEL_ID,
            },
          },
        ]
      : []),
  ],
};

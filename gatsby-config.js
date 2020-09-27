module.exports = {
  siteMetadata: {
    title: "Huidziekten Deinze",
    description: `We zijn een praktijk gesitueerd in Deinze, gespecialiseerd in het behandelen van huidziekten.`,
    author: `@leunesmedia`,
    siteUrl: `https://huidziektendeinze.be/`,
    keywords: [
      `Deinze`,
      `huidziekten`,
      `huid`,
      `dokter`,
      `specialisatie`,
      `praktijk`,
      `Lies Vanquickenborne`,
      `Isabel Blockeel`,
      `Gent`,
      `Oost-vlaanderen`,
      `dermatoloog`,
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Huidziekten Deinze`,
        short_name: `Huidziekten Deinze`,
        description: `We zijn een praktijk gesitueerd in Deinze, gespecialiseerd in het behandelen van huidziekten.`,
        start_url: `/`,
        background_color: `#F2F0ED`,
        theme_color: `#EBDFC7`,
        display: `browser`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Playfair Display",
              variants: ["400", "700"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
            {
              family: "Nunito",
              variants: ["400", "700"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cache`,
  ],
}

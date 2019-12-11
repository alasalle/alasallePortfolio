let siteMetadata = {
  title: `Angela LaSalle`,
  capitalizeTitleOnHome: true,
  logo: `/images/logo.png`,
  icon: `/images/ico.png`,
  pic: `/images/image.png`,
  titleImage: `/images/wall.jpg`,
  introTag: `Full Stack Software Developer`,
  description: `Dedicated to adding value through innovation.`,
  author: `@alasalle`,
  blogItemsPerPage: 10,
  portfolioItemsPerPage: 10,
  darkmode: false,
  switchTheme: false,
  navLinks: [
    {
      name: "HOME",
      url: "/"
    },
    {
      name: "ABOUT",
      url: "/about"
    },
    {
      name: "RESUME",
      url: "/resume"
    },
    {
      name: "PORTFOLIO",
      url: "/portfolio"
    },
    {
      name: "CONTACT",
      url: "/contact"
    }
  ],
  footerLinks: [
    {
      name: "PRIVACY POLICY",
      url: "/privacy-policy"
    },
    {
      name: "GitHub",
      url: "https://github.com/akzhy/gatsby-starter-elemental"
    }
  ],
  social: [
    {
      name: "LinkedIn",
      icon: "/images/linkedin.svg",
      url: "https://www.linkedin.com/in/alasalle/"
    },
    {
      name: "Github",
      icon: "/images/github.svg",
      url: "https://github.com/alasalle"
    }
  ],
  contact: {
    /* Leave the below value completely empty (no space either) if you don't want a contact form. */
    api_url: "./test.json",
    description: `I'd love to hear any questions you might have.`,
    mail: "angela.lasalle91@gmail.com",
    phone: "863-521-3189",
    address: "Lake Wales, FL"
  }
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATRACKING || "none",
        head: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`
                }
              ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents/`
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        strictMath: true
      }
    }
  ]
};

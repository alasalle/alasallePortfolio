let siteMetadata = {
    title: `Angelina LaSalle`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
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
        // {
        //     name: "BLOG",
        //     url: "/blog"
        // },
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
            url: "https://www.linkedin.com/in/angelina-la-salle-a42605179/"
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
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
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

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "AMPATH Forms",
  tagline: "",
  url: "https://github.com/AMPATH/ampath-forms",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "AMPATH", // Usually your GitHub org/user name.
  projectName: "", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "AMPATH Forms",
      logo: {
        alt: "AMPATH Forms Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "welcome",
          position: "left",
          position: "right",
          label: "Docs",
        },
        {
          href: "https://github.com/AMPATH/ampath-forms",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/AMPATH/ampath-forms",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AMPATH`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/AMPATH/ampath-forms/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

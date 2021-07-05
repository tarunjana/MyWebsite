const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tarun Jana',
  tagline: 'A Passionate Coder',
  url: 'https://www.tarunjana.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tarunjana',
  projectName: 'MyWebsite',
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    gtag: {
      trackingID: 'G-FZDLE5QTH4',
      anonymizeIP: true,
    },
    navbar: {
      title: 'Tarun Jana',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      hideOnScroll: true,
      items: [
        { to: '/about', label: 'About', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'left' },
        // Dropdown for all blogs
        {
          label: 'Blogs',
          position: 'left',
          items: [
            {
              label: 'Bengali',
              to: '/bn',
            },
            {
              label: 'English',
              to: '/en',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Notes',
        },
        {
          href: 'https://github.com/tarunjana',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blogs',
          items: [
            {
              label: 'Bengali',
              to: '/bn',
            },
            {
              label: 'English',
              to: '/en',
            },
            {
              label: 'Tags',
              to: '/bn/tags',
            },
          ],
        },
        {
          title: 'Pages',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Contact',
              href: '/contact',
            },
            {
              label: 'Notes',
              to: '/notes/intro',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/TheTarunJana',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TheTarunJana',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/iam_tarun.jana',
            },
          ],
        },
      ],
      copyright: `© 2018 - ${new Date().getFullYear()} Tarun Jana, Built with &#9825; and Docusaurus`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: 'c',
      additionalLanguages: ['powershell'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'notes',
          path: './notes',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          id: "bengali-blog",
          showReadingTime: true,
          routeBasePath: 'bn',
          path: './bengali-blog',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2018 - ${new Date().getFullYear()} Tarun Jana.`,
          },
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    [
      // For English Blog (2nd Blog)
      '@docusaurus/plugin-content-blog',
      {
        id: 'english-blog',
        showReadingTime: true,
        routeBasePath: 'en',
        path: './english-blog',
        feedOptions: {
          type: 'all',
          copyright: `Copyright © 2018 - ${new Date().getFullYear()} Tarun Jana.`,
        },
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 600,
        min: 500,
        steps: 2,
      },
    ],
  ],
};

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [];

const siteConfig = {
    title: '{mono}say - Documentation' /* title for your website */ ,
    tagline: 'Your bot\'s powerful backend.',
    url: 'https://docs.monosay.com' /* your website url */ ,
    baseUrl: '/' /* base url for your project */ ,
    projectName: 'monosay-documentation',
    headerLinks: [
        { doc: 'get-started', label: 'Docs' },
        { doc: 'api', label: 'API' },
        { page: 'help', label: 'Help' },
        { languages: true }
    ],
    disableHeaderTitle: true,
    users,
    /* path to images for header/footer */
    headerIcon: 'img/monosay-logo-inverse@2x.png',
    footerIcon: '',
    favicon: '//platform.monosay.com/site/favicon/favicon.ico',
    /* colors for website */
    colors: {
        primaryColor: '#333',
        secondaryColor: '#205C3B',
    },
    // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
    copyright: 'Copyright © ' +
        new Date().getFullYear() +
        ' {mono}say is a <a href="">MonoFor, Inc.</a> product',
    organizationName: 'monosay', // or set an env variable ORGANIZATION_NAME
    projectName: 'docs', // or set an env variable PROJECT_NAME
    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks
        theme: 'default',
    },
    editUrl: "https://github.com/monosay/docs/edit/master/docs/",
    scripts: [
        'http://code.jquery.com/jquery-3.3.1.min.js',
        'https://buttons.github.io/buttons.js',
        'https://use.fontawesome.com/releases/v5.0.6/js/all.js',
        'https://unpkg.com/spiritjs/dist/spirit.js',
        '/site/js/svg-replace.js'
    ],
    // You may provide arbitrary config keys to be used as needed by your template.
    repoUrl: 'https://github.com/monosay/docs',
    stylesheets: [
        "/site/css/site.css?v=1.0.0",
        "/site/css/browser-mockup.css?v=1.0.0",
        "https://fonts.googleapis.com/css?family=Ubuntu:400,700&amp;subset=latin-ext"
    ]
};

module.exports = siteConfig;
/** @type {import ('next-sitemap').IConfig} **/
const config = {
    siteUrl: 'https://www.sanoyusuke.com',
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://www.sanoyusuke.com/server-sitemap.xml'],
    },
}

module.exports = config
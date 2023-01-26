/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://spila.dev",
  changefreq: 'weekly',
  priority: 1,
  exclude: [],
};

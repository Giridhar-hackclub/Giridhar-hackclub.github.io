const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/Giridhar-hackclub/Giridhar-hackclub.github.io/gh-pages/' : '',
}

const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
} 

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/it-startup' },
      '/services': { page: '/services' },
      '/portfolio': { page: '/portfolio' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
    }
  },
}
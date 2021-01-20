const path = require('path')

// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias['~'] = path.resolve(__dirname)
    config.resolve.alias['components'] = path.resolve(__dirname, 'components')
    config.resolve.alias['styles'] = path.resolve(__dirname, 'styles')
  
    /*config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'images',
      },
    })*/
    
    return config
  },
  // webpackDevMiddleware: config => {
  //   // Perform customizations to webpack dev middleware config
  //   // Important: return the modified config
  //   return config
  // }
}

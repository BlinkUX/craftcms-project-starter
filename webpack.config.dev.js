const webpackMerge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// Set the webpack development configurations
const webpackDevelopmentConfig = {
  // Newly compiled file configuration
  output: {
    filename: "js/[name].bundle.js",
    publicPath: "http://localhost:8080/",
  },

  // Configure webpack plugins
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].bundle.css",
    }),
  ],
}

/*
  ******************************
  * Build Webpack Configuration.
  * Note: Done with webpackMerge
  ******************************
*/
const webpackBaseConfig = require("./webpack.config.base.js")

function webpackMergeConfig (env) {
  return webpackMerge(webpackBaseConfig(env), webpackDevelopmentConfig)
}

module.exports = webpackMergeConfig

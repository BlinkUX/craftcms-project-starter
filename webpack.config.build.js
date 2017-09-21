const webpackMerge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default

// Set the webpack production configurations
const webpackProductionConfig = {
  // Newly compiled file configuration
  output: {
    filename: "js/[name].[chunkhash].bundle.min.js",
  },

  // Configure webpack plugins
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].[contenthash].bundle.min.css",
    }),
    // Generator robots.txt
    new RobotstxtPlugin({
      dest: "../",
      policy: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    }),
  ],
}

/*
  ******************************
  * Build Webpack Configuration
  * Note: Done with webpackMerge
  ******************************
*/
const webpackBaseConfig = require("./webpack.config.base.js")

function webpackMergeConfig (env) {
  return webpackMerge(webpackBaseConfig(env), webpackProductionConfig)
}

module.exports = webpackMergeConfig

const webpack = require("webpack")
const path = require("path")
const webpackMerge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// Set the webpack development configurations
const webpackDevelopmentConfig = {
  // Newly compiled file configuration
  output: {
    filename: "js/[name].bundle.js",
    publicPath: "http://localhost:8080/build/",
  },

  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: "localhost",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    stats: {
      colors: true,
    },
    contentBase: path.join(__dirname, "web"), // should point to the public folder
  },

  // Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.
  watch: true,

  // A set of options used to customize watch mode:
  watchOptions: {
    aggregateTimeout: 300,
  },

  // Enable any "source-map"-like devtool if possible
  devtool: "source-map",

  // Configure webpack plugins
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].bundle.css",
    }),
    new webpack.HotModuleReplacementPlugin(),
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

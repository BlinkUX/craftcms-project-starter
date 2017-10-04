const webpackMerge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default

// Set the webpack production configurations
const webpackProductionConfig = {
  // Use minified version in production environment
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.min.js",
    },
  },

  // Newly compiled file configuration
  output: {
    filename: "js/[name].[chunkhash].bundle.min.js",
  },

  // Module Rules Systems => Configuration for webpack loaders
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: ExtractTextPlugin.extract({
              use: "css-loader!sass-loader",
              fallback: "vue-style-loader",
            }),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract(["css-loader", "sass-loader"]),
      },
    ],
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

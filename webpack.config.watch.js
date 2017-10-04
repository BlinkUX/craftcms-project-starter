const path = require("path")
const webpackMerge = require("webpack-merge")

// Set the webpack development configurations
const webpackDevelopmentConfig = {
  // Newly compiled file configuration
  output: {
    filename: "js/[name].bundle.js",
    publicPath: "http://localhost:8080/",
  },

  // Module Rules Systems => Configuration for webpack loaders
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader", // <style lang="scss">
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
        }],
      },
    ],
  },

  // Dev server configuration
  devServer: {
    host: "localhost",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    stats: "errors-only",
    contentBase: path.join(__dirname, "public"), // should point to the public folder
  },

  // Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.
  watch: true,

  // A set of options used to customize watch mode:
  watchOptions: {
    aggregateTimeout: 300,
  },

  // cheap-module-eval-source-map is faster for development
  devtool: "#cheap-module-eval-source-map",
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

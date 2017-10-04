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

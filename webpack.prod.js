const webpack = require("webpack")
const merge = require("webpack-merge")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  resolve: {
    alias: {
      vue$: "vue/dist/vue.min.js"
    }
  },

  output: {
    filename: "js/[name].[chunkhash].bundle.min.js"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: "css-loader",
              fallback: "vue-style-loader"
            })
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract(["css-loader"])
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(["web/build"]),
    new ExtractTextPlugin({
      filename: "css/[name].[chunkhash].bundle.min.css",
      allChunks: true
    })
  ]
})

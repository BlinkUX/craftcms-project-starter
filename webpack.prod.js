const merge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.min.js"
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
            scss: ExtractTextPlugin.extract({
              use: "css-loader!sass-loader",
              fallback: "vue-style-loader"
            })
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      }
    ]
  },

  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin({
      filename: "css/[name].[contenthash].bundle.min.css"
    })
  ]
})

const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  output: {
    filename: "js/[name].bundle.js",
    publicPath: "http://localhost:8080/"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader"
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  devServer: {
    host: "localhost",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    stats: "errors-only",
    contentBase: path.join(__dirname, "web") // should point to the public folder
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 300
  },

  // cheap-module-eval-source-map is faster for development
  devtool: "#cheap-module-eval-source-map"
})

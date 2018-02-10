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
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  // cheap-module-eval-source-map is faster for development
  devtool: "#cheap-module-eval-source-map"
})

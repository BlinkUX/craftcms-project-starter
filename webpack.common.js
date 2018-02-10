const webpack = require("webpack")
const path = require("path")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },

  entry: {
    main: "./src/main.js",
    router: "./src/router.js"
  },

  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "./web/build"),
    publicPath: "/build/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },

  plugins: [
    // Will remove duplicate modules that exist due to "Code Splitting"
    // to only include once within the specified bundle "names".
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",

      minChunks: module =>
        module.context && module.context.includes("node_modules")
    }),

    // This plugin must come after the vendor one (because webpack
    // includes runtime into the last chunk)
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime",

      // minChunks: Infinity means that no app modules
      // will be included into this chunk
      minChunks: Infinity
    }),

    // Generates an HTML file for you that includes all your webpack
    // bundles in the body using style and script tags
    new HtmlWebpackPlugin({
      template: "./src/templates/_layout.twig",
      filename: "../../templates/_layout.twig"
    }),

    // Copy static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./static"),
        to: "static",
        ignore: [".*"]
      }
    ]),

    new FriendlyErrorsPlugin()
  ]
}

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
    app: "./src/javascripts/main.js",
    router: "./src/javascripts/router.js",
    vendor: ["animejs", "axios", "picturefill", "vue"]
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
    // The DefinePlugin allows you to create global constants which
    // can be configured at compile time.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),

    // Will remove duplicate modules that exist due to "Code Splitting"
    // to only include once within the specified bundle "names".
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      // minChunks ensures that no other module goes into the vendor chunk
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

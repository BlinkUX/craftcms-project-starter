// Require Webpack
const webpack = require("webpack")

// Node"s built-in path module, which prevents file path issues between operating systems
// Use NodeJS helper module to define correct absolute file reference paths
const path = require("path")

const ExtractTextPlugin = require("extract-text-webpack-plugin")

// Generates an HTML5 file for you that includes all your webpack bundles in the body using script tags
const HtmlWebpackPlugin = require("html-webpack-plugin")

// const RobotstxtPlugin = require("robotstxt-webpack-plugin").default

// MAIN WEBPACK CONFIGURATION
const webpackBaseConfig = function (env) {
  return {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "vue$": "vue/dist/vue.esm.js",
      },
    },

    // Location of the index.js file
    // Where Webpack"s begins it module compilation process
    entry: {
      // File containing our custom code
      main: "./src/javascripts/main.js",

      // File containing our custom routes
      router: "./src/javascripts/router.js",

      // File containing code from third party libraries
      vendor: ["axios", "lazysizes", "picturefill", "vue"],
    },

    // Newly compiled file configuration
    output: {
      // Save location of the newly compiled output file
      path: path.resolve(__dirname, "./web/build"),

      // What to call the newly compiled output file
      // [name] will be replaced with the entry objects key value.
      filename: "[name].config.base.js",

      // Path webpack will reference for looking for public files. Important for dynamic codesplitting
      publicPath: "/build/",
    },

    // Module Rules Systems => Configuration for webpack loaders
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
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
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: "file-loader",
          options: {
            limit: 10000,
            name: "img/[name].[hash:7].[ext]",
          },
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: "file-loader",
          options: {
            limit: 10000,
            name: "media/[name].[hash:7].[ext]",
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: "file-loader",
          options: {
            limit: 10000,
            name: "fonts/[name].[hash:7].[ext]",
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract(["css-loader", "sass-loader"]),
        },
      ],
    },

    // Don"t follow/bundle these modules, but request them at runtime from the environment
    // externals: {
    //     Modernizr: "modernizr"
    // },

    // Plugins => Configure webpack plugins
    plugins: [
      // The DefinePlugin allows you to create global constants which can be configured at compile time.
      // Note: process.env.NODE_ENV is set within npm "scripts"
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),

      // Will remove duplicate modules that exist due to "Code Splitting" to only include once within the specified bundle "names".
      new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor", "manifest"],
        minChunks: Infinity,
        // minChunks ensures that no other module goes into the vendor chunk
      }),

      // Generates an HTML5 file for you that includes all your webpack bundles in the body using script tags
      // NOTE: Add excludeChunks: ["fallback"]
      new HtmlWebpackPlugin({
        template: "./src/templates/_layout.twig",
        filename: "../../templates/_layout.twig",
      }),
    ],
  }
}

module.exports = webpackBaseConfig

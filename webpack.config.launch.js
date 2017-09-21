const webpackMerge = require("webpack-merge")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default

// Set the webpack production configurations
const webpackLaunchConfig = {
  plugins: [
    // Generate favicon
    new FaviconsWebpackPlugin({
      logo: "./src/favicon.png",
      persistentCache: true,
      icons: {
        appleStartup: false,
        firefox: false,
      },
    }),
    // Generate robots.txt
    new RobotstxtPlugin({
      dest: "../",
      policy: [
        {
          userAgent: "*",
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
const webpackBuildConfig = require("./webpack.config.build.js")

function webpackMergeConfig (env) {
  return webpackMerge(webpackBuildConfig(env), webpackLaunchConfig)
}

module.exports = webpackMergeConfig

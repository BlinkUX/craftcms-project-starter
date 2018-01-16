const path = require("path")
const merge = require("webpack-merge")
const dev = require("./webpack.dev.js")

module.exports = merge(dev, {
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
    aggregateTimeout: 300,
    ignored: "/node_modules/"
  }
})

console.log("WEBPACK_CONFIG_TYPE: " + process.env.WEBPACK_CONFIG_TYPE)

function buildWebpackConfig (env) {
  return require("./webpack.config." + process.env.WEBPACK_CONFIG_TYPE + ".js")(env)
}

module.exports = buildWebpackConfig

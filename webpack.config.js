var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      MAGIC_CONSTANT: JSON.stringify("some_thing")
    })
  ],
  externals: [
    // Everything that starts with "@phosphor/"
    /^@phosphor\/.+$/,
    /^@jupyterlab\/.+$/
  ]
};

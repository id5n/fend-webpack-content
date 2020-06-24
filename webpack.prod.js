/* Require `path` */
const path = require("path");
/* Require Webpack */
const webpack = require("webpack");
/* Require HTMLWebPackPlugin */
const HtmlWebPackPlugin = require("html-webpack-plugin");

/* Populate module exports to use with Webpack */
module.exports = {
  mode: "production",
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        enforce: "pre",
        test: "/.js$/",
        exclude: "/node_modules/",
        loader: "eslint-loader",
      },
      {
        test: "/.js$/",
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template:
        "./src/client/views/index.html",
      filename:
        "./index.html",
    }),
  ],
};

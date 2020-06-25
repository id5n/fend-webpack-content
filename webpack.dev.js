/* Require `path` */
const path = require('path');
/* Require Webpack */
const webpack = require('webpack');
/* Require HTMLWebPackPlugin */
const HtmlWebPackPlugin = require('html-webpack-plugin');
/* Require CleanWebpackPlugin for managing 'dist' folder */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* Require BundleAnalyzerPlugin to see visualization of all the bundles used */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/* Populate module exports to use with Webpack */
module.exports = {
    mode: 'development', /* Add mode flag for Development */
    devtool: 'source-map', /* Add Source Map devtool to generate source mapping */
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: '/\.js$/',
                exclude: '/node_modules/',
                loader: 'eslint-loader',
            },
            {
                test: '/\.js$/',
                exclude: '/node_modules/',
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({ /* Declare new instance of HTMLWebPackPlugin */
            template: './src/client/views/index.html', /* Telling it to look at HTML file in '/client/views' */
            filename: './index.html', /* Telling it to generate a new 'index.html' file inside of the 'dist' folder */
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),
        new BundleAnalyzerPlugin(),
    ]
};

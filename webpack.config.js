/* Require `path` */
const path = require('path');
/* Require Webpack */
const webpack = require('webpack');
/* Require HTMLWebPackPlugin */
const HtmlWebPackPlugin = require('html-webpack-plugin');

/* Populate module exports to use with Webpack */
module.exports = {
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
        })
    ]
};

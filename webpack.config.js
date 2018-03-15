const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "www");
const APP_DIR = path.resolve(__dirname, "src");

const config = {
    entry: APP_DIR + "/script.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: APP_DIR,
                loader: ExtractTextPlugin.extract(
                    "css-loader"
                )
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader?name=contents/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};

module.exports = config;
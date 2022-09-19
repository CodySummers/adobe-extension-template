const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const pluginConfig = require('./pluginrc.js')

const SRC_FOLDER = pluginConfig.sourceFolder
const DIST_FOLDER = path.resolve(pluginConfig.destinationFolder, pluginConfig.extensionBundleId)

const CLIENT_SRC = path.resolve(SRC_FOLDER, 'client-src')
const CLIENT_DIST = path.resolve(DIST_FOLDER, 'client-dist')

const PUBLIC = path.resolve(__dirname, 'public')

const XML_TEMPLATES = path.resolve(PUBLIC, 'xml')
const XML_MANIFEST = path.resolve(XML_TEMPLATES, 'manifest.template.xml.js')
const MANIFEST = require(XML_MANIFEST)(pluginConfig)
const XML_DEBUG = path.resolve(XML_TEMPLATES, '.debug.template.js')
const DEBUG = require(XML_DEBUG)(pluginConfig)


module.exports = {
    entry: [CLIENT_SRC],

    target: "node",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader", 
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]'
                }
            },
            {
                test: /\.(svg)$/,
                loader: 'file-loader',
                options: {
                    name: './icons/[name].[ext]'
                }
            },
        ],
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    output: {
        filename: "index.js",
        path: CLIENT_DIST,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            minify: {
                // do not remove type="text" as css uses it
                removeRedundantAttributes: false,
            }
        }),
        new MiniCssExtractPlugin({
            filename: "./main.css"
        }),
        //XML Templates
        new HtmlWebpackPlugin({
            filename: "../CSXS/manifest.xml",
            templateContent: MANIFEST,
            inject: false,
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: "../.debug",
            templateContent: DEBUG,
            inject: false,
            minify: false
        }),
    ],
};

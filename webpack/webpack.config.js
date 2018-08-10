/**
 * @overview generated by ghoti-cli
 * @fileoverview webpack production configs
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const APP_DIR = path.resolve(__dirname, '..', 'src');
const FAVICON_DIR = path.resolve(__dirname, '..', 'public', 'favicon.png');
const MANIFEST_DIR = path.resolve(__dirname, '..', 'public', 'manifest.json');

let config = {
    entry: APP_DIR + "/index.dev.tsx",
    output: {
        filename: "bundle.js",
        path: BUILD_DIR
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".sass", ".png", ".jpg", ".gif", ".webp"],
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: './tsconfig.json'
                    }
                }]
            },
            {　　　　　　
                test: /\.(jpg|png|gif|webp)$/,
                loader: 'url-loader?limit=8192'　　　　
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                enforce: "pre",
                test: /\.(t|j)sx?$/,
                loader: "source-map-loader",
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new CopyWebpackPlugin([{
            from: FAVICON_DIR,
            to: BUILD_DIR,
        }, {
            from: MANIFEST_DIR,
            to: BUILD_DIR,
        }], {}),
        new UglifyJSPlugin()
    ]
};

module.exports = config;

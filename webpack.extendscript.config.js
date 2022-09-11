const path = require('path');
const { env } = require('process')
const jsxbin = require('jsxbin')
const pluginConfig = require('./pluginrc.js')

const SRC_FOLDER = pluginConfig.sourceFolder
const DIST_FOLDER = path.resolve(pluginConfig.destinationFolder, pluginConfig.extensionBundleId)

const AE_SRC_FOLDER = path.resolve(SRC_FOLDER, 'ae-src')
const AE_DIST = path.resolve(DIST_FOLDER, 'ae-dist')

const HELPERS = path.resolve(AE_SRC_FOLDER, 'src', 'helpers')
const ES5_SHIM = path.resolve(HELPERS, 'es5-shim.ts')
const JSON_SHIM = path.resolve(HELPERS, 'json2.ts')


module.exports = {
    target: ['web', 'es3'],

    entry: ['es5-shim', AE_SRC_FOLDER],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'index.jsx',
        path: AE_DIST,
    },

    optimization: {
        minimize: false,
    },

    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
                    console.log('Making a binary file...')
                    jsxbin(path.join(AE_DIST, 'index.jsx'))
                });
            }
        }
    ]
};
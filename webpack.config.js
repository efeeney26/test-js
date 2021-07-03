const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    context: path.join(__dirname, './src'),
    entry: './main',
    output: {
        path: path.join(__dirname, `/target-${NODE_ENV === 'development' ? 'dev' : 'prod'}`),
        filename: '[name].js'
    },
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV === 'development' ? "inline-cheap-module-source-map" : false,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['', '.js']
    },
    optimization: {
        minimize: NODE_ENV === 'production',
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })],
        splitChunks: {
            chunks: "all"
        },
        emitOnErrors: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ],
            },

        ]
    }
}

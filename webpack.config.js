var path = require('path');
const webpack = require('webpack');
const publicPath = '/react-catalog/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    devtool: 'cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Каталог товаров',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map'
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        hot: true
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'eslint-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif|eot|ttf|woff|woff2)$/,
                use: ['file-loader']
            },
            {
                test: /\.jsx|.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
                resolve: {
                    extensions: [".js", ".jsx"]
                }
            }
        ]
    }
}
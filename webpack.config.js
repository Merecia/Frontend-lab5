const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')

module.exports = {

    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js'
    },

    mode: 'development',

    plugins: [

        new HtmlWebpackPlugin({
            title: 'Обо мне',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Последние новости',
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Фотоальбом',
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Моё расписание',
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html'
        }),

        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'src/assets/images', to: 'images' }
                ]
            }
        ),

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin()
    ],

    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
            ]
          }
        ]
    }

}
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin(),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: 'all' // or 'initial'
        })
    ]
}
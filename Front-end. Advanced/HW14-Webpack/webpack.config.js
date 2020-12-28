const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },{
            test: /\.(png|jpe?g|gif|svg|mp3)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },{
          test: /\.(ttf|woff|woff2|eot)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './index.html'}),
        new CleanWebpackPlugin(),
        new CopyPlugin({
          patterns: [
            { from: path.resolve(__dirname, 'src/img/bg.jpg'), to: path.resolve(__dirname, 'dist' ) },
            { from: path.resolve(__dirname, 'src/img/cat.svg'), to: path.resolve(__dirname, 'dist' ) },
            { from: path.resolve(__dirname, 'src/img/snow1.png'), to: path.resolve(__dirname, 'dist' ) }
          ],
        })
    ],
    

}
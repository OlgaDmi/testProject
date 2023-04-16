const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const conf = {
   entry: './src/index.js',
   output: {
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js',
        publicPath: 'dist/'
   },
   devServer: {
        contentBase: path.join(__dirname, "dist"),
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                // images / icons
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                  name: "[name].[ext]"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
              },
              {
                  // Fonts
                  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]'
                  }
                }
            // Правило для инлайнового добавления стилей
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //       use: "css-loader"
            //     })
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/img', to: 'img' },
              { from: 'src/fonts', to: 'fonts' },
            ],
          })
    ]
}
 
module.exports = conf;
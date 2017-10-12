const webpack = require('webpack');
const path = require('path');
const resolve = require('path').resolve
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "style.css"
});


module.exports = {
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        include: __dirname,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  resolve: {
    alias: {
      'components': resolve(__dirname, 'src/components'),
      'views': resolve(__dirname, 'src/views')
    },
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'src',
      'node_modules'
    ]
  }
};

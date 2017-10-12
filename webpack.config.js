const webpack = require('webpack');
const path = require('path');
var resolve = require('path').resolve

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
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

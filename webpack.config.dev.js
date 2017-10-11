const webpack = require('webpack');
const path = require('path');

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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  }
};

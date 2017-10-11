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
<<<<<<< HEAD:webpack.config.js
  devtool: 'inline-source-map',
=======
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
>>>>>>> 768d0ded8a261dc3665207ad014776da0fa19ec1:webpack.config.dev.js
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
<<<<<<< HEAD:webpack.config.js
        loaders: "babel-loader",
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
=======
        loaders: ['babel-loader', 'react', 'react-hot-loader/webpack']
>>>>>>> 768d0ded8a261dc3665207ad014776da0fa19ec1:webpack.config.dev.js
      }
    ]
  }
};

const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const paths = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  html: path.resolve(__dirname, 'src/index.html'),
  public: path.resolve(__dirname, 'dist')
}

module.exports = {
  mode: 'development',
  entry: paths.entry,
  output: {
    filename: 'bundle.js',
    path: paths.public
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: paths.html,
        to: paths.public
      }
    ]),
  ],
  devServer: {
    contentBase: paths.public,
    port: 8080
  }
};

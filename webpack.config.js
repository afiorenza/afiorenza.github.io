const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const paths = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  html: path.resolve(__dirname, 'src/index.html'),
  public: path.resolve(__dirname, 'dist')
}

const configurations = {
  base: {
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
        },
        {
          test: /\.scss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
        }
      ]
    },
    plugins: [
      new CopyPlugin([
        {
          from: paths.html,
          to: paths.public
        }
      ])
    ]
  },
  development: {
    devServer: {
      contentBase: paths.public,
      hot: true,
      inline: true,
      open: true,
      port: 8080,
      progress: true
    }
  },
  production: {
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  }
};

module.exports = (env, { mode }) => {
  const isDevelopment = mode === 'development';
  const extraConfiguration = isDevelopment ? configurations.development : configurations.production;

  return merge(configurations.base, extraConfiguration);
 };

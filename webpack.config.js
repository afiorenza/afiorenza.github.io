const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const paths = {
  assets: path.resolve(__dirname, 'assets'),
  entry: path.resolve(__dirname, 'src/index.jsx'),
  html: path.resolve(__dirname, 'index.html'),
  public: path.resolve(__dirname, 'dist/'),
  src: path.resolve(__dirname, 'src')
}

const configurations = {
  development: {
    devServer: {
      publicPath: '/dist/',
      hot: true,
      inline: true,
      port: 8080,
      progress: true
    }
  },
  production: {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    }
  }
};

const getBaseConfiguration = (isDevelopment) => {
  return {
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
          test: /\.(scss|css)$/i,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CopyPlugin([
        {
          from: paths.assets,
          to: paths.public
        }
      ]),
      new Dotenv()
    ]
  }
};

module.exports = (env, { mode }) => {
  const isDevelopment = mode === 'development';
  const baseConfiguration = getBaseConfiguration(isDevelopment);
  const extraConfiguration = isDevelopment ? configurations.development : configurations.production;

  return merge(baseConfiguration, extraConfiguration);
 };

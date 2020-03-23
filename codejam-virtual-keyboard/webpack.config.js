const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      }],
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin,
        'css-loader',
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(woff|woff2|ttf|otf|eot)$/i,
      use: [{
        loader: 'file-loader?name=[name].[ext]',
        options: {
          outputPath: 'assets/fonts',
          name: '[name].[ext]',
        },
      }],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'assets/img',
          name: '[name].[ext]',
        },
      }],
    }, {
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src/assets/scripts'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        loader: 'eslint-loader',
      },
      ],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread'],
        },
      },
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id]',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    writeToDisk: true,
    open: true,
  },
};

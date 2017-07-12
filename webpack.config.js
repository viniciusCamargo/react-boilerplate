const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackOptimize = require('webpack').optimize
const WriteFilePlugin = require('write-file-webpack-plugin')

const { CommonsChunkPlugin } = webpackOptimize

module.exports = {
  entry: {
    home: './src/index.js',
    a: './src/a.js',
    bAndC: ['./src/b.js', './src/c.js'],
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: './',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'title >>> home',
      chunks: ['vendor', 'home'],
      filename: 'home.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'title >>> a',
      chunks: ['vendor', 'a'],
      filename: 'a.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'title >>> bAndC',
      chunks: ['vendor', 'bAndC'],
      filename: 'bAndC.html'
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new WriteFilePlugin()
  ]
}

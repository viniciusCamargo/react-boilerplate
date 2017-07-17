const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackOptimize = require('webpack').optimize
const WriteFilePlugin = require('write-file-webpack-plugin')

const { CommonsChunkPlugin } = webpackOptimize

module.exports = {
  entry: {
    index: './src/index.js',
    a: './src/a.js',
    bAndC: ['./src/b.js', './src/c.js'],
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
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
      title: 'title >>> index',
      chunks: ['vendor', 'index'],
      filename: 'index.html'
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
      filename: 'js/vendor.js'
    }),
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: './dist',
    open: true,
    openPage: '' // https://github.com/webpack/webpack-dev-server/issues/960#issuecomment-311477326
  }
}

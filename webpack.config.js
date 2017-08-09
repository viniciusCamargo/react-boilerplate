const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
  entry: { index: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new WriteFilePlugin()
  ],
  devServer: {
    contentBase: './dist',
    port: 8888,
    open: true,
    openPage: '' // https://github.com/webpack/webpack-dev-server/issues/960#issuecomment-311477326
  }
}

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, 'src', 'main.js'),
  },
  output: {
    filename: 'assets/js/[name]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      inject: 'head',
    }),
    new VueLoaderPlugin(),
  ],
}

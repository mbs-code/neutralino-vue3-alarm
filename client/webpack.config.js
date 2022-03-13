const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  entry: {
    bundle: path.join(__dirname, 'src', 'main.ts'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'public'),
          to: path.join(__dirname, 'dist'),
        },
        {
          from: path.join(__dirname, 'src', 'assets'),
          to: path.join(__dirname, 'dist', 'assets'),
        },
      ],
    }),
  ],
}

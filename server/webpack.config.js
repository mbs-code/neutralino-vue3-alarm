const path = require('path')

module.exports = {
  mode: 'development',

  target: 'node',

  entry: {
    main: path.join(__dirname, 'src', 'main.ts'),
  },
  output: {
    path: path.join(__dirname, '../', 'extensions', 'server', 'bin'),
    filename: '[name].js',
    clean: true,
  },

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: [
      '.ts', '.js',
    ]
  }
}

const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/main.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['src', 'node_modules']
  }
}

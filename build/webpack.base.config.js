const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/d2.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /.tsx?$/i,
        use: [
          {loader: 'ts-loader'}
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
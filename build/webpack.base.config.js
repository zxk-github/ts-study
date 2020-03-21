const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/d3.ts',
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
          {loader: 'ts-loader', options: {
            transpileOnly: false  // 开启之后制作语言转换 不做类型检查
          }}
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
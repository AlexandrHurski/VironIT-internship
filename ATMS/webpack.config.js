const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dir'),
    filename: 'main.js',
    publicPath: 'dir'
  },
  module:{
      rules:[
          {
            test: /\.js/,
            loader: 'babel-loader',
          },
          {
            test:/\.css/,
            use: [ 'style-loader', 'css-loader' ]
          }
      ]
  }
}

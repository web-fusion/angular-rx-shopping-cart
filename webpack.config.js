const path = require('path');

module.exports = {
  entry: './src/a.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
}
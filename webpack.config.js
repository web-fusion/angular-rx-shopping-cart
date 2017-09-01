const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'angular-rx-shopping-card.js',
    path: path.resolve(__dirname, 'dist')
  }
}
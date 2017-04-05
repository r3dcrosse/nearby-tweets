const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './app');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;

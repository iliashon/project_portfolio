'use strict';

// eslint-disable-next-line no-undef, no-unused-vars
let path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};

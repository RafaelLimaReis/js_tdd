const webpack = require('webpack');
/*
  houve alterações nas versões mais novas do webpack
  - loaders -> rules
  - presets  = es5 -> @babel/preset-env
  - pacotes novos = @babel/core, @babel/preset-env
*/
module.exports = {
  mode: 'development',
  entry: {
    filename: './index.js'
  },
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['@babel/preset-env', { modules: false }]
          ]
        }
      }
    ]
  }
};

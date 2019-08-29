const webpack = require('webpack');
/*
  houve alterações nas versões mais novas do webpack
  - loaders -> rules
  - presets  = es5 -> @babel/preset-env
  - pacotes novos = @babel/core, @babel/preset-env

  - não foi preciso utilizar o uglify, porque a build prod faz a mesma coisa ;)
  - duvidas com source-map:
    - em prod o eval-source-map não gera o map mas encontra erro nos arquivos
    - em prod o source-map não funciona
    - em prod o eval não funciona completamente
    (artigo util: https://ehsangazar.com/source-maps-and-how-it-works-b3f93ca7ea5)
*/
module.exports = {
  devtool: 'eval-source-map',
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

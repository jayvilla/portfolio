const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ProcessEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
})

const SassPlugin = new ExtractTextPlugin({
  filename: './styles/main.css'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') },
      {
          test: /\.(png|jpg|jpeg|gif|woff)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
    ]
  },
  plugins: [HtmlWebpackPluginConfig, SassPlugin, new webpack.HotModuleReplacementPlugin()] // add ProcessEnvPlugin if not working
};

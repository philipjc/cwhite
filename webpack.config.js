
var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

/* Using resolve rather than join() is the same as navigating to a file with cd,
    And seen as though webpack likes absolute paths, this is good.
*/
var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'js/main.js'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(ROOT_PATH, 'styles')
      },
      { test: /\.ejs$/,
        loaders: ['ejs-loader'],
        include: path.resolve(ROOT_PATH, 'templates')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'CWhiteBuildingServices',
      template: './templates/index.html',
      inject: 'body'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval',
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          },
          include: path.resolve(ROOT_PATH, 'js')
        }
      ]
    },
    devServer: {
      port: 4000,
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

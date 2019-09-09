const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { baseConfig } = require('./webpack.config.base');

const PUBLIC_PATH = '';

module.exports = {
  ...baseConfig,
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: 'source-map',
  output: {
    ...baseConfig.output,
    filename: 'assets/[name].bundle.js?v=[hash:5]',
    chunkFilename: 'assets/[name].chunk.js?v=[chunkhash:5]'
  },
  module: {
    ...baseConfig.module,
    rules: baseConfig.module.rules.concat([
      {
        test: /\.(ico|png|mp3|wav|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'images/[name].[ext]?v=[hash:5]'
        }
      },
      {
        test: /\.gif$/,
        loader: 'url-loader',
        options: {
          limit: 0,
          name: 'images/[name].[ext]'
        }
      }
    ])
  },
  plugins: baseConfig.plugins.concat([
    new SWPrecacheWebpackPlugin({
      cacheId: 'blog-front-end',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'blog-service-worker.js',
      minify: true,
      navigateFallback: `${PUBLIC_PATH}index.html`,
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        compressor: {
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false
        },
        output: {
          comments: false
        }
      }
    })
  ])
};

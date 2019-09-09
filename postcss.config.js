/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
const AtImport = require('postcss-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

// Todo https://github.com/stylelint/stylelint https://github.com/morishitter/stylefmt
module.exports = {
  plugins: [
    AtImport({
      path: resolve('src')
    }),
    pxtorem({
      propList: ['*']
    }),
    precss,
    autoprefixer
  ]
};

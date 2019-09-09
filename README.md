# Jackie Blog

## Slow construction due to interest

- [x] Basic Boilerplate
- [ ] UI Layout
- [ ] Cache
- [ ] Optimize

## ✨ Technology Features

### Dependencies

- Project base on [React](https://reactjs.org/) and uses [React-Hooks](https://reactjs.org/docs/hooks-intro.html)
- Use [Apollo GraphQL](https://www.apollographql.com/docs/react/) (support react-hooks) and [Axios](https://github.com/axios/axios) as http request
- Partial page update using [🔥hot-loader](https://github.com/hot-loader/react-dom)
- Use [big.js](https://github.com/MikeMcl/big.js/) for floating point calculations
- Support [Redux](https://redux.js.org/introduction/getting-started) , but not support [Async Action](https://redux.js.org/advanced/async-actions) (recommend use hooks by Jackie).
- Adds specific imports for [polyfills](https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage) when they are used in each file.
- Use [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) as front-end routing management
  - TODO: Use high-level routers instead of Router

### Develop Dependencies

- [webpack](https://webpack.js.org/)

  - [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) as visualize size of webpack output files treemap
  - [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin) is a plugin for webpack to provide an intermediate caching step for modules
  - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) is a plugin that simplifies creation of HTML files to serve your bundles
  - [sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin) is a webpack plugin for using service workers to cache your external project dependencies.
  - [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) uses [uglify-js](https://github.com/mishoo/UglifyJS2) to minify your JavaScript.
  - [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) extracts CSS into separate files.
  - [babel-loader](https://github.com/babel/babel-loader), [css-loader](https://github.com/webpack-contrib/css-loader), [eslint-loader](https://github.com/webpack-contrib/eslint-loader), [postcss-loader](https://github.com/postcss/postcss-loader), [style-loader](https://github.com/webpack-contrib/style-loader), [svg-react-loader](https://github.com/jhamlet/svg-react-loader)
  - The difference between [url-loader](https://github.com/webpack-contrib/url-loader) and [file-loader](https://github.com/webpack-contrib/file-loader)

- [babel](https://babeljs.io/docs/en/)

  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)
  - [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) will transform class properties in such a way that you can define class properties using property initializer syntax
  - [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators) allow use es6 decorators
  - [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) is used to identify code split
  - [babel-eslint](https://github.com/babel/babel-eslint) is a wrapper for Babel's parser used for ESLint

- [eslint](https://eslint.org/docs/user-guide/getting-started)

  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) provides Airbnb's .eslintrc as an extensible shared config. It requires [eslint](https://eslint.org/docs/user-guide/getting-started), [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks), and [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack) allow eslint use webpack alias define

- [stylelint](https://github.com/stylelint/stylelint)

  - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) The standard shareable config for stylelint.
  - [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin) to lint your CSS/Sass code using stylelint

- [prettier](https://prettier.io)

  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) Turns off all rules that are unnecessary or might conflict with Prettier.
  - [pretty-quick](https://github.com/azz/pretty-quick) is runs [Prettier](https://prettier.io) on your changed files.

- [postcss](https://github.com/postcss/postcss)

  - [postcss-import](https://github.com/postcss/postcss-import) to transform @import rules by inlining content.
  - [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) that generates rem units from pixel units.
  - [precss](https://github.com/jonathantneal/precss) lets you use Sass-like markup and staged CSS features in CSS.
  - [autoprefixer](https://github.com/postcss/autoprefixer) lets you write CSS rules without vendor prefixes

- [astroturf](https://github.com/4Catalyzer/astroturf) lets you write CSS in your JavaScript files without adding any runtime layer, and with your existing CSS processing pipeline

- [classnames](https://github.com/JedWatson/classnames) is a simple JavaScript utility for conditionally joining classNames together
- [husky](https://github.com/typicode/husky) is git hooks made easy
- [commitlint](https://github.com/conventional-changelog/commitlint) is Lint commit messages

## 🖥 Environment Support

- Modern browsers and Internet Explorer 9+ (with [polyfills](https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage))

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE9, IE10, IE11, Edge                                                                                                                                                                                           | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## 📦 Install

```bash
yarn
# or
yarn install
```

## 🔨 Usage

run develop

```bash
yarn start
```

run stage build

```bash
yarn stage
```

run build

```bash
yarn build
```

## ⌨️ Development

clone locally:

```bash
$ git clone git@github.com:Project-G66-Org/projectg-fe-base.git
$ cd projectg-fe-base
$ yarn install
$ yarn start
```

## Project Structure

```
projectg-fe-base
├── node_modules
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .prettierrc
├── .stylelintrc.json
├── commitlint.config.js
├── jsconfig.json
├── package.json
├── postcss.config.js
├── README.md
├── yarn.lock
└── config
│   ├── webpack.config.base.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
└── src
    ├── app.js —— Main entry, route config in here
    ├── index.html
    ├── index.js
    ├── common
    |   ├── common.scss —— Global base css
    |   └── constants.scss —— Global scss variable
    ├── components —— Save multiple used component
    |   ├── example: Loading
    |   └── example: Form
    ├── constants
    |   └── env
    |       ├── dev.json —— Develop environment setting
    |       ├── index.js —— Check the process to decide use file
    |       ├── prod.json —— Production environment setting
    |       └── stage.json —— Staging environment setting
    ├── containers —— route used in app.js
    |   ├── example: Home
    |   ├── example: Search
    |   └── example: Login
    ├── fonts —— unique fonts
    |   └── example: Roboto
    ├── store —— redux data
    └── utils —— common js dir
    |   ├── example: HttpRequest
    |   ├── example: Error
    |   ├── example: GA
        └── example: Calculate
```

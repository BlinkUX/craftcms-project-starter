# Craft CMS webpack Boilerplate

This project is inspired by MilesHerndon’s [Craft CMS Project Boilerplate](https://github.com/MilesHerndon/craft-webpack-project-boilerplate) and has been adapted to my needs.

## Installation

Download or clone this repository and run:

``` sh
$ yarn
```

## Workflow

Use Node.js scripts to run build tools.

* `$ yarn watch` - Launches webpack-dev-server and recompiles files whenever they change
* `$ yarn build` - Creates production ready code

After running `` $ yarn watch `` or `` $ yarn build ``, your deploy-ready code will be taken from the ``./src/`` directory and placed within the ``./web/build/`` and ``./templates/`` directories respectively.

## Under the Hood

This project scaffolding is pretty opinionated and makes use of the following tools, open source projects, and architecture methodologies:

* [Craft CMS](https://craftcms.com/) - Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike.
* [Element API for Craft CMS](https://github.com/craftcms/element-api) - Craft CMS plugin to create a JSON API/Feed for your elements in Craft.
* [Webpack](https://webpack.js.org/) - A bundler for javascript and friends with [code splitting](https://webpack.js.org/guides/code-splitting/) and [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/) set up.
* [Sass](http://sass-lang.com/) - CSS extension language
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
* [ECMAScript 2015 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) - JavaScript's built-in modules
* [Tachyons](http://tachyons.io/) - Functional css for humans
* [anime.js](http://animejs.com/) - JavaScript Animation Engine
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Lozad.js](https://github.com/ApoorvSaxena/lozad.js) - Highly performant, light and configurable lazy loader in pure JS with no dependencies for images, iframes and more, using IntersectionObserver API.
* [IntersectionObserver polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) - This library polyfills the native IntersectionObserver API in unsupporting browsers.
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX.
* [Standard JS](https://standardjs.com/) - JavaScript Standard Style
* [PictureFill](https://github.com/scottjehl/picturefill) - A responsive image polyfill for <picture>, srcset, sizes, and more.

**Go through the repository to learn how things play together.**

_P_

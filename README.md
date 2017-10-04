# Craft CMS Project Scaffolding

This project is inspired by MilesHerndon’s [Craft CMS Project Boilerplate](https://github.com/MilesHerndon/craft-webpack-project-boilerplate) and has been adapted to my needs.

## About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).

## Install Craft 3 Beta

Assuming you have [Composer](https://getcomposer.org/) installed on your machine, in the project folder run:

``` sh
$ composer install --ignore-platform-reqs
```

Detailed installation instructions can be found in the [Craft 3 documentation](https://github.com/craftcms/docs/blob/master/en/installation.md).

## 3. Set up the Database

Next up, you’ll need to create a database for your Craft project. Craft 3 supports both MySQL 5.5+ and PostgreSQL 9.5+.

If you’re given a choice, we recommend the following database settings in most cases:

- **MySQL**
  - Default Character Set: `utf8`
  - Default Collation: `utf8_unicode_ci`

- **PostgreSQL**
  - Character Set: `UTF8`

Once the database is created, you’ll need to configure your `.env` file with with its connection settings. You can either edit the file manually, or run the `./craft setup` command from the root project directory in your terminal.

> {tip} That `.env` file will be processed via [PHP dotenv], which the `craftcms/craft` project comes with preinstalled. The advantage of using PHP dotenv is that it offers a place to store sensitive information (like database connection settings) in a file that doesn’t get committed to your Git repository.

## 4. Set up the Web Server

Create a new web server to host your Craft project. Its document root should point to the `web/` folder.

If you’re not using MAMP, you will probably need to update your `hosts` file, so your computer knows to route requests to your chosen host name to the local computer.

- **macOS/Linux/Unix:** `/etc/hosts`
- **Windows:** `\Windows\System32\drivers\etc\hosts`

You can test whether everything is set up correctly by pointing your web browser to `http://HOSTNAME/index.php?p=admin` (substituting `HOSTNAME` with your new web server’s host name). You should get the Craft installation wizard, which will take you through a couple setup screens, and then perform the actual installation.

## Install Dependencies

In the project folder run:

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

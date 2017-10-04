# Craft CMS webpack Boilerplate

This project is inspired by MilesHerndon’s [Craft CMS Project Boilerplate](https://craftcms.com) and has been adapted to my needs.

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

**Go through the repository to learn how things play together.**

_P_

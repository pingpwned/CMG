const { merge } = require('webpack-merge');
const config = require('./webpack/webpack.common');
const devConfig = require('./webpack/webpack.dev');
const prodConfig = require('./webpack/webpack.prod');

const configs = [config];

const { NODE_ENV } = process.env;

switch (NODE_ENV) {
  case 'dev':
    configs.push(devConfig);
    break;
  case 'prod':
    configs.push(prodConfig);
    break;
  // no default
}

module.exports = merge(configs);

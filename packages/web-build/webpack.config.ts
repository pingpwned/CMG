import { merge } from 'webpack-merge';
import config from './webpack/webpack.common';
import devConfig from './webpack/webpack.dev';
import prodConfig from './webpack/webpack.prod';

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

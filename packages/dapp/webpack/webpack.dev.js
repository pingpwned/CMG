// import { Configuration as WebpackConfiguration } from 'webpack';
// import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const config = {
  mode: 'development',
  devServer: {
    hot: true,
    open: false, // cause fuck it
  },
  devtool: 'cheap-module-source-map', // recommended by create-react-app
  plugins: [new ReactRefreshWebpackPlugin()],
};

module.exports = config;

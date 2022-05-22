// import { Configuration as WebpackConfiguration } from 'webpack';
// import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const devConfig: webpack.Configuration = {
  mode: 'development',
  // devServer: {
  //   hot: true,
  //   open: false, // cause fuck it
  // },
  devtool: 'cheap-module-source-map', // recommended by create-react-app
  plugins: [new ReactRefreshWebpackPlugin()],
};

export default devConfig;

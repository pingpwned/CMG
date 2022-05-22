import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const BundleAnalyzer = BundleAnalyzerPlugin;

const prodConfig: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map', // recommended by create-react-app
  plugins: [
    new BundleAnalyzer({
      openAnalyzer: true,
      analyzerMode: 'static',
    }),
  ],
};

export default prodConfig;

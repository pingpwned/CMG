const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

const BundleAnalyzer = BundleAnalyzerPlugin.BundleAnalyzerPlugin;

const config = {
  mode: 'production',
  devtool: 'source-map', // recommended by create-react-app
  plugins: [
    new BundleAnalyzer({
      openAnalyzer: true,
      analyzerMode: 'static',
    }),
  ],
};

module.exports = config;

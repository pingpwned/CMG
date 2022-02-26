const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['..', 'node_modules'],
    alias: {
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@game': path.resolve(__dirname, '..', 'src', 'game'),
      '@web3': path.resolve(__dirname, '..', 'src', 'web3'),
      '@state': path.resolve(__dirname, '..', 'src', 'state', 'index.ts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '..', 'src', 'assets'),
          to: path.join('static'),
        },
      ],
    }),
  ],
};

module.exports = config;

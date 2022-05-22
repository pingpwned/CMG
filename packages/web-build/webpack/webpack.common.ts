import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '..', '..', 'dapp', 'src', 'index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, '..', '..', 'dapp', 'src', 'components'),
      '@game': path.resolve(__dirname, '..', '..', 'dapp', 'src', 'game'),
      '@web3': path.resolve(__dirname, '..', '..', 'dapp', 'src', 'web3'),
      '@state': path.resolve(__dirname, '..', '..', 'dapp', 'src', 'state', 'index.ts'),
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
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [
                '@babel/plugin-transform-runtime',
                [
                    'babel-plugin-styled-components',
                    {
                        displayName: true,
                        preprocess: true,
                    },
                ],
              ],
          },
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
    path: path.resolve(__dirname, '..', '..', 'dapp', 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', '..', 'dapp', 'src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '..', '..', 'dapp', 'src', 'assets'),
          to: path.join('static'),
        },
      ],
    }),
  ],
};

export default config;

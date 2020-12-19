const path = require('path');
const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

let pages = getDirectories(path.join(__dirname, 'src', 'pages'));
let entryPrep = {};
pages.forEach(e => {
  entryPrep[e] = `${__dirname}/src/pages/${e}/${e}.ts`;
});
let htmlPlugins = pages.map(e => {
  return new HtmlWebpackPlugin({
    inject: false,
    chunks: [e],
    filename: `dist/pages/${e}/index.html`,
    template: `src/pages/${e}/${e}.html`
  });
});

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: entryPrep,
  output: {
    path: __dirname,
    filename: 'dist/pages/[name]/bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    writeToDisk: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: 'dist/assets', noErrorOnMissing: true }]
    }),
    ...htmlPlugins
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

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
    contentBase: './dist/pages/corp',
    hot: true
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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: [
      'dist/**',
      'node_modules/**',
      'package.json',
      'package-lock.json',
      'README.md',
      'webpack.config.js'
    ]
  }
};


const path = require('path');
const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development', //'production',
  entry: {
    "app": './src/index.ts',
    "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
    "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
    "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
    "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
    "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  devtool: 'inline-source-map',

  output: {
    globalObject: 'self',
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    },
    {
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    ]
  },
  plugins: [
    // new UglifyJSPlugin(),
  ],
};
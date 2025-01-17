//@ts-check

'use strict';

const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]'
  },
  devtool: 'source-map',
  externals: {
    "@esfx/equatable": 'commonjs @esfx/equatable',
    "@microsoft/typescript-etw": "commonjs @microsoft/typescript-etw",
    "vscode": 'commonjs vscode',
    "typescript": 'commonjs typescript',
    "ref-napi": "commonjs ref-napi",
    "ref-struct-di": "commonjs ref-struct-di",
    "ffi-napi": "commonjs ffi-napi",
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};
module.exports = config;
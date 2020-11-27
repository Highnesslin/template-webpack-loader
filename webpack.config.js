const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './out'),
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./loader/formatLoader.js'),
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: path.resolve('./loader/formatLoader.js'),
          },
        ],
      },
    ],
  },
};

const path = require ('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: 'http://localhost:8080/build/',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
      },
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }, 
      }, 
      {
        test: /\.s?css$/i,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
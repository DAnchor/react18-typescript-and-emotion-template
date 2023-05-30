// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/Index.tsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'),
    },
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};

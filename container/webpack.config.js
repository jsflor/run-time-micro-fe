const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
      }
    }),
  ],
}
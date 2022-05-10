const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/entries/home.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    // publicPath: path.resolve(__dirname, 'dist')+"/",
    publicPath: "/",
    chunkFilename: 'js/[id].[chunkhash].js',
    clean: true,
  },
  mode: "development",
  devServer: {
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        loader: 'file-loader',
        options: {
          limit: 10000,
          fallback: 'file-loader',
          name: 'images/[name].[hash].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader',
        options: {
            limit: 10000,
            mimetype: 'application/font-ttf',
            name: 'assets/fonts/[name.[ext]'
        },
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Setup',
      template: './index.html',
      filename: 'index.html',
    }),
  ]
}
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");

const isDev = process.env.NODE_ENV === "development";
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].${ext}`);

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: filename("js"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "svg",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: filename("html"),
      template: "./src/Website/DevelopPage.pug",
    }),
    new CleanWebpackPlugin(),
    new LiveReloadPlugin(),
  ],
  devServer: {
    port: 8080,
    hot: true,
    compress: true,
    contentBase: path.join(__dirname, "dist"),
  },
};

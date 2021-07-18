const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/html/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
}

module.exports = {
  entry: {
    main: path.resolve(__dirname, "/src/index.js"),
  },
};

module.exports = {
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "[name].bundle.js",
  },
};

module.exports = {
  mode: "development",
};

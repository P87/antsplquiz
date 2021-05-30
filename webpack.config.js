const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: {
    "js/app": "./src/site/assets/js/apps.ts",
  },
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "src/site/public/assets"),
    filename: "[name].bundle.js",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".ejs"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};

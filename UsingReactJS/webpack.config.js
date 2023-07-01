const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src/popup.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      { test: /\.tsx$/, exclude: /node_modules/, use: "ts-loader" },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/manifest.json"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "src/static-assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
    new HtmlPlugin({
      title: "Chrome Extenstion using ReactJS",
      filename: "popup.html",
    }),
  ],
};

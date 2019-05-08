const path = require("path");
const webpack = require("webpack");
const env = require("process");
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  entry: "./src/playground.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "playground")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.CLIENT_ID": JSON.stringify(`${process.env.CLIENT_ID}`)
    })
  ]
};

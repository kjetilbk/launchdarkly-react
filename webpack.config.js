const path = require("path");
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
  }
};

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    port: 9000,
    contentBase: "./",
    publicPath: "/dist/",
    open: "Google Chrome"
  }
};

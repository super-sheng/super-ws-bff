const { resolve } = require('path')

module.exports = {
  // name: `server:${name}`,
  entry: './app.ts',
  externalsPresets: { node: true },
  target: "node",
  output: {
    libraryTarget: "commonjs",
    path: resolve(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      '@interfaces': `${__dirname}/interface`,
      '@config': `${__dirname}/config`,
      '@middlewares': `${__dirname}/middlewares`,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
   module: {
    rules: [
      // tsx
      {
        test: /\.(t|j)s?x?$/,
        use: [
          {
            loader: "swc-loader",
          },
        ],
      },
    ],
  },
}
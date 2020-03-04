const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src/styles'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              // fiber option moved to sassOptions in sass-loader 8.0+.
              // However, it's no longer needed as sass-loader uses fiber
              // by default if you have it installed locally (you still
              // need to install fiber). But here is how you can explicitly
              // specify it, anyway…
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'hucssley.css',
    }),
  ],
}

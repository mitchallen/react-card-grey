var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "env", "stage-0", "react" ],
            plugins: [
              "babel-plugin-transform-decorators-legacy",
              "babel-plugin-transform-react-jsx",
              "babel-plugin-transform-object-rest-spread"
            ]
          }
        }
      }
    ]
  },
  externals: {
    react: 'commonjs react'
  }
};

const webpack = require("webpack");

module.exports = {
  // other webpack configurations

  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/dialects\/.*$/,
      contextRegExp: /sequelize$/,
    }),
  ],
};

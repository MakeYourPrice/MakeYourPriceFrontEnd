const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      styles: path.resolve(__dirname, './src/assets/styles'),
    },
  },
};

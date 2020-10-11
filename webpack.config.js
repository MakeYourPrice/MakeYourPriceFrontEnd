const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      styles: path.resolve(__dirname, './src/assets/styles'),
      components: path.resolve(__dirname, './src/components'),
      modules: path.resolve(__dirname, './src/store/modules'),
      views: path.resolve(__dirname, './src/views'),
      config: path.resolve(__dirname, './src/config'),
      mixins: path.resolve(__dirname, './src/mixins'),
    },
  },
};

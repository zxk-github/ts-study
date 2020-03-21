const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.pro.config');

// let config = process.env.NODE_ENV === 'development' ? devConfig: proConfig;

// module.exports = merge(baseConfig, config);

module.exports = function(env, config) {
  let config = argv.mode === 'development' ? devConfig: proConfig;
  return merge(baseConfig, config);
}
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('views',resolve('src/views'))
      .set('components',resolve('src/components'))
      .set('network',resolve('src/network'))
    // 这里只写了两个，你可以自己再加，按这种格式.set('', resolve(''))
  }
};

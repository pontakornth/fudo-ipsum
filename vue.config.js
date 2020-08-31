module.exports = {
  pwa: {
    name: 'Fudo Ipsum',
  },
  chainWebpack: (config) => {
    config.module
      .use('yaml-loader')
      .loader('yaml-loader')
      .end();
  },
};

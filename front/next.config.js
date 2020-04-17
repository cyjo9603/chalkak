const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/less/antd-custom.less'), 'utf8'));

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}

module.exports = withBundleAnalyzer(
  withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
    webpack: (config) => {
      const prod = process.env.NODE_ENV === 'production';

      const plugins = [...config.plugins, new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)];

      if (prod) {
        plugins.push(new CompressionPlugin());
      }

      return {
        ...config,
        mode: prod ? 'production' : 'development',
        devtool: prod ? 'hidden-soure-map' : 'eval',
        plugins,
      };
    },
  }),
);

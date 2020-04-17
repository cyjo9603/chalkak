const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
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
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
    webpack: (config) => {
      const prod = process.env.NODE_ENV === 'production';

      return {
        ...config,
        mode: prod ? 'production' : 'development',
        devtool: prod ? 'hidden-soure-map' : 'eval',
      };
    },
  }),
);

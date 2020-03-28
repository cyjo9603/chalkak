const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/less/antd-custom.less'), 'utf8'));

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },
  webpack: (config) => {
    return config;
  },
});

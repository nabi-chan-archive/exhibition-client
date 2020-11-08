const path = require('path');
const Dotenv = require('dotenv-webpack')
const isBuild = process.env.NODE_ENV === 'production';

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    localIdentName: isBuild ? '[hash:base64:5]' : '[local]-[hash:base64:5]',
  },
  env: {
  },
  webpack: config => {
    config.plugins.push(new Dotenv({silent: true}));
    return config
  }
};

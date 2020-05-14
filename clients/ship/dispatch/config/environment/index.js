const globalConfig = require('../../../../../config/environment');

// - global config also includes process.env
const config = {
  DELHIVERY_HOST: globalConfig.DELHIVERY_HOST || 'https://track.delhivery.com',
  DELHIVERY_TOKEN: globalConfig.DELHIVERY_TOKEN,
};

module.exports = Object.assign({}, globalConfig, config);

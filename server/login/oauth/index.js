const oauth2Server = require('@shoppre/oauth2-server');

const model = require('./model');

const { NODE_ENV } = require('../../../config/environment');

module.exports = oauth2Server({
  model,
  refreshTokenLifetime: 60 * 24 * 3600, // 60 days
  grants: [],
  debug: NODE_ENV !== 'production',
});

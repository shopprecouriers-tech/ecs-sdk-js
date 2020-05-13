const rp = require('request-promise-native');

const { LOGIN_URL } = require('../../../config/environment');

exports.getUserFromToken = accessToken => rp({
  uri: `${LOGIN_URL}/api/users/me?access_token=${accessToken}`,
  json: true,
});

exports.getToken = accessToken => rp({
  uri: `${LOGIN_URL}/api/users/token?access_token=${accessToken}`,
  json: true,
});

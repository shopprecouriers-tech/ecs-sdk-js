const rp = require('request-promise-native');

const { ENGAGE_URL } = require('../../config/environment');

exports.send = payload => rp({
  method: 'POST',
  url: `${ENGAGE_URL}/api/oneSignal/send`,
  json: true,
  body: payload,
});

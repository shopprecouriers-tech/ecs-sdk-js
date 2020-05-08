const debug = require('debug');
const rp = require('request-promise-native');

const { OMNIINVENTORY_URL, OMNIINVENTORY_SECRET } = process.env;
const log = debug('omniinventory/index.js');

exports.create = (payload) => {
  log('createshipment()', payload);
  if(!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to createShipment method',
    })
  }
  return rp({
    method: 'POST',
    uri: `${OMNIINVENTORY_URL}/api/shipments?token=${OMNIINVENTORY_SECRET}`,
    body: payload,
    json: true,
  })
};

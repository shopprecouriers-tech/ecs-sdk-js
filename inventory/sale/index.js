const debug = require('debug');
const rp = require('request-promise-native');

const { OMNIINVENTORY_URL, OMNIINVENTORY_SECRET } = process.env;
const log = debug('omniinventory/index.js');

exports.create = (payload) => {
  log('createTransaction()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to createSale method',
    });
  }
  return rp({
    method: 'POST',
    uri: `${OMNIINVENTORY_URL}/api/sales?token=${OMNIINVENTORY_SECRET}`,
    body: payload,
    json: true,
  });
};

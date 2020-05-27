const debug = require('debug');
const rp = require('request-promise-native');

const { INVENTORY_URL } = require('../../../../config/environment');

const log = debug('inventory/index.js');

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
    uri: `${INVENTORY_URL}/api/sales`,
    body: payload,
    json: true,
  });
};

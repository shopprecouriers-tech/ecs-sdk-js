const debug = require('debug');
const rp = require('request-promise-native');

const { INVENTORY_URL } = require('../../../../config/environment');

const log = debug('inventory/stockItem/stockItem.service.js');

exports.create = (payload) => {
  log('stockItem()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to Create StockItem method',
    });
  }
  return rp({
    method: 'POST',
    uri: `${INVENTORY_URL}/api/stockItems`,
    body: payload,
    json: true,
  });
};

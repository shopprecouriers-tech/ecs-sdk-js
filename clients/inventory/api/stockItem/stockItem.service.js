const debug = require('debug');
const rp = require('request-promise-native');
const _ = require('lodash');

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

exports.update = (payload) => {
  log('stockItem update()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to update StockItem method',
    });
  }
  const { id } = payload;
  const body = _.omit(payload, 'id');

  return rp({
    method: 'PUT',
    uri: `${INVENTORY_URL}/api/stockItems/${id}`,
    body: body,
    json: true,
  });
};

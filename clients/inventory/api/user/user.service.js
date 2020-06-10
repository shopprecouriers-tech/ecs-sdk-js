const debug = require('debug');
const rp = require('request-promise-native');

const { INVENTORY_URL } = require('../../../../config/environment');

const log = debug('inventory/user/user.service.js');

exports.create = (payload) => {
  log('createUser()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to createUser method',
    });
  }
  return rp({
    method: 'POST',
    uri: `${INVENTORY_URL}/api/users`,
    body: payload,
    json: true,
  });
};

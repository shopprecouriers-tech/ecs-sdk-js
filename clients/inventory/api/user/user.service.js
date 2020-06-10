const debug = require('debug');
const rp = require('request-promise-native');
const _ = require('lodash');

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

exports.update = (payload) => {
  log('upadteUser()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to updateUser method',
    });
  }

  const { id } = payload;

  const body = _.omit(payload, 'id');
  log(INVENTORY_URL);
  return rp({
    method: 'PUT',
    uri: `${INVENTORY_URL}/api/users/${id}`,
    body,
    json: true,
  });
};

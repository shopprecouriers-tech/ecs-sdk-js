const debug = require('debug');
const rp = require('request-promise-native');

const { INVENTORY_URL } = require('../../../../config/environment');

const log = debug('inventory/api/creditNote/creditNote.service.js');

exports.create = (payload) => {
  log('createCreditNote()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to createCreditNote method',
    });
  }
  return rp({
    method: 'POST',
    uri: `${INVENTORY_URL}/api/CreditNotes`,
    body: payload,
    json: true,
  });
};

const rp = require('request-promise-native');

const { OMNIQUICKBOOK_URL } = process.env;

exports.create = (payload) => {
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to create  method',
    });
  }

  return rp({
    method: 'post',
    uri: `${OMNIQUICKBOOK_URL}/api/sales`,
    body: payload,
    json: true,
  });
};

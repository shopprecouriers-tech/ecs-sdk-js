const rp = require('request-promise-native');

const { SHIPPING_DSN } = process.env;

exports.create = async (data) => {
  if (!data) return Promise.reject({ code: 400, messaage: '' });
  const order = rp({
    method: 'POST',
    uri: `${SHIPPING_DSN}/api/orders/sync`,
    body: data,
    json: true,
  });

  return order;
};

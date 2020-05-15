const rp = require('request-promise-native');

const { ECSTRACK_URL } = process.env;

exports.create = async shipment => rp({
  method: 'POST',
  uri: `${ECSTRACK_URL}/api/shipments`,
  body: shipment,
  json: true,
});

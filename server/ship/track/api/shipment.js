const rp = require('request-promise-native');

const { TRACK_URL } = require('../../../../config/environment');

exports.create = async shipment => rp({
  method: 'POST',
  uri: `${TRACK_URL}/api/shipments`,
  body: shipment,
  json: true,
});

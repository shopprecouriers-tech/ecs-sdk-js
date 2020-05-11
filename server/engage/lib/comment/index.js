const rp = require('request-promise-native');

const { ENGAGE_URL } = require('../../../../config/environment');

exports.create = async (data, objectType) => {
  if (!objectType) return Promise.reject({ code: 400, messaage: '' });
  const comment = rp({
    method: 'POST',
    uri: `${ENGAGE_URL}/api/public/${objectType}/${data.object_id}/comments`,
    body: data,
    json: true,
  });

  return comment;
};

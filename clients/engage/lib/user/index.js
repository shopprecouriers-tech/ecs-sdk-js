const rp = require('request-promise-native');

const { ENGAGE_URL } = require('../../../../config/environment');

exports.signup = async (data) => {
  const user = rp({
    method: 'POST',
    uri: `${ENGAGE_URL}/api/users`,
    body: data,
    json: true,
  });

  return user;
};


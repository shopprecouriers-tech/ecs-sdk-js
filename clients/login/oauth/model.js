const debug = require('debug');
const jwt = require('jsonwebtoken');

const log = debug('login/oauth/model');
const service = require('./oauth.service');

const config = require('../../../config/environment');

const addHours = (date, hour) => {
  date.setTime(date.getTime() + (hour * 60 * 60 * 1000));
  return date;
};

const oAuthModel = {
  getAccessToken(bearerToken, callback) {
    log('getAccessToken', JSON.stringify(bearerToken));

    try {
      const userPromise = (new Promise((resolve, reject) => {
        if (config.LOGIN_JWT === 'true') {
          resolve(jwt.verify(bearerToken, config.LOGIN_SECRET));
        } else {
          service
            .getToken(bearerToken, true)
            .then(resolve)
            .catch(reject);
        }
      }));

      return userPromise
        .then(user => callback(null, user))
        .catch(err =>
        // hack due to node-oauth2-server need expiry time to bypass
        // check oauth/authenticate.js
        // Todo: Danger
          ((err && err.response && err.response.body)
            ? callback(null, Object.assign(err.response.body, { expires: addHours(new Date(), 1) }))
            : callback(err)));
    } catch (err) {
      return callback(err, { access_token: bearerToken });
    }
  },
};

module.exports = oAuthModel;

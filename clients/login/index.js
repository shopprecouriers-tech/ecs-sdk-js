const debug = require('debug');
const rp = require('request-promise-native');

const authenticate = require('./oauth/authenticate');
const oAuth = require('./oauth');
const service = require('./oauth/oauth.service');

const { LOGIN_URL } = require('../../config/environment');

const log = debug('login/index');
log('callback', LOGIN_URL);

exports.oAuth = oAuth;
exports.authenticate = authenticate;

exports.callback = ({
  client_id: clientId,
  client_secret: clientSecret,
  redirect_uri: redirectUri,
}) => async (req, res) => {
  log('callback');
  try {
    const response = await rp({
      method: 'POST',
      uri: `${LOGIN_URL}/oauth/token`,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      form: {
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
        code: req.query.code,
      },
      json: true,
    });

    const user = await service.getUserFromToken(response.access_token);

    return { tokens: response, user };
    // - ... Signup: you can update user details in you crm database
    // - ... Login: You can attach token to cookies or header
  } catch (err) {
    return res.status(500).json(err);
  }
};


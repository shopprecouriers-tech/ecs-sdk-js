const debug = require('debug');

const oAuth = require('./');

const log = debug('login/oauth/authenticate');

// - next will get argument only if error occurs
// - https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
const _next = (req, res, next) => (err) => {
  if (err) {
    if (err.code === 400 && err.message === 'The access token was not found') {
      return res.json({
        code: 400,
        error: 'invalid_request',
        error_description: 'The access token was not found',
      });
    }

    return res.status(500).json(err);
  }

  if (req.oauth && req.oauth.bearerToken && req.oauth.bearerToken.code) {
    return res
      .status(req.oauth && req.oauth.bearerToken.code)
      .json(req.oauth.bearerToken);
  }

  log('Intercepting next', { err, u: req.user });
  return next();
};

module.exports = () => (req, res, next) => {
  if (req.user) return next();

  return oAuth.authorise()(req, res, _next(req, res, next));
};

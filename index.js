const pay = require('./clients/pay');
const inventory = require('./clients/inventory');

const dispatch = require('./clients/ship/dispatch');
const track = require('./clients/ship/track');
const ndr = require('./clients/ship/ndr');

const engage = require('./clients/engage');
const quickbook = require('./clients/quickbook');
const log = require('./clients/log');
const login = require('./clients/login');
const logger = require('./lib/logger');

module.exports = {
  LOGIN: login,

  PAY: pay,

  INVENTORY: inventory,

  DISPATCH: dispatch,
  TRACK: track,
  NDR: ndr,

  ENGAGE: engage,
  QUICKBOOK: quickbook,

  LOG: log,
  LOGGER: logger,
};

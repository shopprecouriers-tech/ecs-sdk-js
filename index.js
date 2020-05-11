const pay = require('./server/pay');
const inventory = require('./server/inventory');

const dispatch = require('./server/ship/dispatch');
const track = require('./server/ship/track');
const ndr = require('./server/ship/ndr');

const engage = require('./server/engage');
const log = require('./server/log');
const login = require('./server/login');
const logger = require('./lib/logger');

module.exports = {
  LOGIN: login,

  PAY: pay,

  INVENTORY: inventory,

  DISPATCH: dispatch,
  TRACK: track,
  NDR: ndr,

  ENGAGE: engage,

  LOG: log,
  LOGGER: logger,
};

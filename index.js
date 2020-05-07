const pay = require('./pay');
const inventory = require('./inventory');

const dispatch = require('./ship/dispatch');
const track = require('./ship/track');
const ndr = require('./ship/ndr');

const engage = require('./engage');
const log = require('./log');
const login = require('./login');
const logger = require('./logger');

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

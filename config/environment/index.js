
const { env } = process;

const PREFIX = env.PREFIX || 'http://';
const DOMAIN = env.DOMAIN || 'ecs.shoppre.com';

const config = {
  PREFIX,
  DOMAIN,
  LOGIN_URL: env.LOGIN_URL || `${PREFIX}login.${DOMAIN}`,

  ENGAGE_URL: env.ENGAGE_URL || `${PREFIX}engage.${DOMAIN}`,

  INVENTORY_URL: env.INVENTORY_URL || `${PREFIX}inventory.${DOMAIN}`,

  DISPATCH_URL: env.DISPATCH_URL || `${PREFIX}dispatch.${DOMAIN}`,
  TRACK_URL: env.TRACK_URL || `${PREFIX}track.${DOMAIN}`,
  NDR_URL: env.NDR_URL || `${PREFIX}ndr.${DOMAIN}`,

  PAY_URL: env.PAY_URL || `${PREFIX}pay.${DOMAIN}`,

  LOG_URL: env.LOG_URL || `${PREFIX}log.${DOMAIN}`,
  QUICKBOOK_URL: `${PREFIX}quickbook.${DOMAIN}`,
};

module.exports = Object.assign(config, process.env);

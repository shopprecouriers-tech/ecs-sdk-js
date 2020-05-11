
const { env } = process;

const config = {
  LOGIN_URL: env.LOGIN_URL || `${env.PREFIX}login.${env.DOMAIN}`,

  INVENTORY_URL: env.INVENTORY_URL || `${env.PREFIX}inventory.${env.DOMAIN}`,

  DISPATCH_URL: env.DISPATCH_URL || `${env.PREFIX}dispatch.${env.DOMAIN}`,
  TRACK_URL: env.TRACK_URL || `${env.PREFIX}track.${env.DOMAIN}`,
  NDR_URL: env.NDR_URL || `${env.PREFIX}ndr.${env.DOMAIN}`,

  PAY_URL: env.PAY_URL || `${env.PREFIX}pay.${env.DOMAIN}`,

  LOG_URL: env.LOG_URL || `${env.PREFIX}log.${env.DOMAIN}`,
  DELHIVERY_HOST: env.DELHIVERY_HOST || 'https://track.delhivery.com',
  DELHIVERY_TOKEN: env.DELHIVERY_TOKEN,
};

module.exports = Object.assign(config, process.env);

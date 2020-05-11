const path = require('path');

const config = require('../../config/environment');

module.exports = {
  root: path.normalize(`${__dirname}/../../../..`),
  CURRENT_EMAIL: config.CURRENT_EMAIL || 'welcome_signup',
  project: 'lambda',
  EMAIL_SOURCE: 'support@shopprecouriers.com',
  EMAIL_TO: 'tech.shoppre@gmail.com',
};

const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const Sentry = require('winston-raven-sentry');

const { root, NODE_ENV, SENTRY_DSN } = process.env;

const logger = new winston.Logger({
  transports: [
    new DailyRotateFile({
      name: 'error-file',
      datePattern: '.yyyy-MM-dd.log',
      filename: `${root}/logs/error`,
    }),
    new Sentry({
      dsn: SENTRY_DSN,
      install: true,
      config: { environment: NODE_ENV, release: '@@_RELEASE_' },
    }),
  ],
});

if (NODE_ENV !== 'production') logger.add(winston.transports.Console);

module.exports = logger;


process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', (err) => {
  logger.error('uncaughtException', err);
});


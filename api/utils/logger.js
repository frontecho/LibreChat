const path = require('path');
const winston = require('winston');

const logDir = path.join(__dirname, '..', 'logs');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `${logDir}/login-logs.log` }),
  ],
});

module.exports = logger;

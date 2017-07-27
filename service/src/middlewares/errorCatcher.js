const { logger } = require('../../utils/commons');

const errorCatcher = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    logger.warn(err);
  }
};

module.exports = errorCatcher;

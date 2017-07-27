const { router } = require('../start');
const appVersion = require('../../package.json').version;

router.get('/', async (ctx, next) => {
  ctx.body = appVersion;
  await next();
});

const { router } = require('../start');

router.get('/temps', async (ctx, next) => {
  ctx.body = 123;
  await next();
});

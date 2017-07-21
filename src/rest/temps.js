const { router } = require('../start');
const { create } = require('../activities/tempsActivities');

router.post('/temps', async (ctx, next) => {
  const createdTemp = await create(ctx.request.body);
  ctx.body = createdTemp;
  ctx.status = 201;
  await next();
});

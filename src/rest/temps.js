const { router } = require('../start');
const { create, search, getStats } = require('../activities/tempsActivities');

router.post('/temps', async (ctx, next) => {
  const createdTemp = await create(ctx.request.body);
  ctx.body = createdTemp;
  ctx.status = 201;
  await next();
});

router.get('/temps', async (ctx, next) => {
  ctx.body = await search();
  ctx.status = 201;
  await next();
});

router.get('/temps/stats', async (ctx, next) => {
  ctx.body = await getStats();
  ctx.status = 201;
  await next();
});

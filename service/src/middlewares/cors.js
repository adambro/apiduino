const cors = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', '*');
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  await next();
};

module.exports = cors;

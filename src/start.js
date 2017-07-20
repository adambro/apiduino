const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const boostrap = () => {
  const startApp = () => {
    const app = new Koa();
    const router = new Router();

    router.get('/', async (ctx, next) => {
      ctx.body = {};
      await next();
    });

    app
      .use(bodyParser())
      .use(router.routes())
      .use(router.allowedMethods());

    app.listen(3000);
  };

  return { startApp };
};

module.exports = boostrap;

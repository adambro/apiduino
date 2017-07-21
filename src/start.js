const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const glob = require('glob');
const path = require('path');
const config = require('config');

const app = new Koa();
const router = new Router();

const appVersion = require('../package.json').version;
const { connectToDb } = require('./dao/daoInit');

const loadAllRestRoutes = () => {
  glob.sync(path.join(__dirname, './rest/*.js')).forEach((file) => {
    require(path.resolve(file));
  });
};

const boostrap = () => {
  const startApp = (port) => {
    connectToDb(config.get('dbConfig'));

    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
      }
    });

    router.get('/', async (ctx, next) => {
      ctx.body = appVersion;
      await next();
    });

    loadAllRestRoutes();

    app
      .use(bodyParser())
      .use(router.routes())
      .use(router.allowedMethods());

    app.listen(port);
  };

  return { startApp };
};

module.exports = { boostrap, router };

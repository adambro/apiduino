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

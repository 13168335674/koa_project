/*
 * @Author       : ADI
 * @Date         : 2021-03-18 20:23:27
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 11:52:12
 */
const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const path = require("path");
const { REDIS_CONF } = require("./config/db");
const { isProd } = require("./utils/env");
const { SESSION_SECRET_KEY } = require("./config/secretKeys");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");

const userViewRouter = require("./routes/view/user");
const blogViewRouter = require("./routes/view/blog");
const errorViewRouter = require("./routes/view/error");

const userAPIRouter = require("./routes/api/user");
const utilsAPIRouter = require("./routes/api/utils");
const blogHomeAPIRouter = require("./routes/api/blog-home");
const profileAPIRouter = require("./routes/api/blog-profile");

const koaStatic = require("koa-static");

// error handler
onerror(
  app,
  isProd
    ? {
        redirect: "/404",
      }
    : null
);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(koaStatic(__dirname + "/public"));
app.use(koaStatic(path.join(__dirname, "..", "uploadFiles")));

app.use(
  views(__dirname + "/views", {
    extension: "ejs",
  })
);

// session配置（加密密匙）
app.keys = SESSION_SECRET_KEY;
app.use(
  session({
    // cookie的name 默认是 koa.sid
    key: "weibo.sid",
    // redis key 的前缀 默认是 koa.sess
    prefix: "weibo:sess:",
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
    store: redisStore({
      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
    }),
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(utilsAPIRouter.routes(), utilsAPIRouter.allowedMethods());
app.use(blogHomeAPIRouter.routes(), blogHomeAPIRouter.allowedMethods());
app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods());
app.use(profileAPIRouter.routes(), profileAPIRouter.allowedMethods());

app.use(userViewRouter.routes(), userViewRouter.allowedMethods());
app.use(blogViewRouter.routes(), blogViewRouter.allowedMethods());
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;

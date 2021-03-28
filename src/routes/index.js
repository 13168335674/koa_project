const router = require("koa-router")();
const { loginRedirect } = require("../middlewares/loginChecks");
// router.get("/", loginRedirect, async (ctx, next) => {
//   await ctx.render("index", {
//     title: "Hello Koa 2!",
//   });
// });

router.get("/string", loginRedirect, async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", loginRedirect, async (ctx, next) => {
  // const { session } = ctx;
  // if (session.num === null) {
  //   session.num = 0;
  // }
  // session.num++;
  ctx.body = {
    title: "koa2 json",
    // num: session.num
  };
});

module.exports = router;

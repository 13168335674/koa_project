/*
 * @Author: ADI
 * @Date: 2021-03-27 10:37:01
 * @LastEditors  : ADI
 * @LastEditTime : 2021-03-31 20:38:45
 */
const router = require("koa-router")();
const { loginRedirect } = require("../../middlewares/loginChecks");

function getLoginInfo(ctx) {
  let data = {
    isLogin: false,
  };
  const userInfo = ctx.session.userInfo;
  if (userInfo) {
    data = {
      isLogin: true,
      userName: userInfo.userName,
    };
  }
  return data;
}

router.get("/login", async (ctx, next) => {
  await ctx.render("login", getLoginInfo(ctx));
});

router.get("/register", async (ctx, next) => {
  await ctx.render("register", getLoginInfo(ctx));
});

router.post("/isExist", async (ctx, next) => {
  const { userName } = ctx.reqest.body;

  await ctx.render("isExist", {});
});

router.get("/setting", loginRedirect, async (ctx, next) => {
  await ctx.render("setting", ctx.session.userInfo);
});

module.exports = router;

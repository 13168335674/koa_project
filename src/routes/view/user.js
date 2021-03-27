/*
 * @Author: ADI
 * @Date: 2021-03-27 10:37:01
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 11:02:30
 */
const router = require("koa-router")();

router.get("/login", async (ctx, next) => {
  await ctx.render("login", {});
});

router.get("/register", async (ctx, next) => {
  await ctx.render("register", {});
});

router.post("/isExist", async (ctx, next) => {
  const { userName } = ctx.reqest.body;

  await ctx.render("isExist", {});
});

module.exports = router;

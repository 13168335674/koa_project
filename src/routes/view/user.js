/*
 * @Author: ADI
 * @Date: 2021-03-27 10:37:01
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 10:38:39
 */
const router = require("koa-router")();

router.get("/login", async (ctx, next) => {
  await ctx.render("login", {});
});

router.get("/register", async (ctx, next) => {
  await ctx.render("register", {});
});

module.exports = router;

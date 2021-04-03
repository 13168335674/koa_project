/*
 * @Author       : ADI
 * @Date         : 2021-04-03 11:26:26
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 11:27:36
 */
const router = require("koa-router")();
const { loginRedirect } = require("../../middlewares/loginChecks");

router.get("/", async (ctx, next) => {
  await ctx.render("index");
});

module.exports = router;

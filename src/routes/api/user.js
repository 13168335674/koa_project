/*
 * @Author: ADI
 * @Date: 2021-03-27 10:58:46
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 12:02:57
 */
const router = require("koa-router")();
const { isExist, register } = require("../../controller/user");

router.prefix("/api/user");

router.post("/register", async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body;
  ctx.body = await register({ userName, password, gender });
});

router.post("/isExist", async (ctx, next) => {
  const { userName } = ctx.request.body;
  ctx.body = await isExist(userName);
});

module.exports = router;

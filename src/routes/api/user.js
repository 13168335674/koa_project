/*
 * @Author: ADI
 * @Date: 2021-03-27 10:58:46
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 11:30:37
 */
const router = require("koa-router")();
const { isExist } = require("../../controller/user");

router.prefix("/api/user");

router.post("/register", async (ctx, next) => {});

router.post("/isExist", async (ctx, next) => {
  const { userName } = ctx.request.body;
  ctx.body = await isExist(userName);
});

module.exports = router;

/*
 * @Author: ADI
 * @Date: 2021-03-27 10:58:46
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-28 10:55:51
 */
const router = require("koa-router")();
const { isExist, register, login } = require("../../controller/user");
const { getValidator } = require("../../middlewares/validator");
const userValidate = require("../../validator/user");

router.prefix("/api/user");

router.post("/register", getValidator(userValidate), async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body;
  ctx.body = await register({ userName, password, gender });
});

router.post("/isExist", async (ctx, next) => {
  const { userName } = ctx.request.body;
  ctx.body = await isExist(userName);
});

router.post("/login", async (ctx, next) => {
  const { userName, password } = ctx.request.body;
  ctx.body = await login({
    ctx,
    userName,
    password,
  });
});

module.exports = router;

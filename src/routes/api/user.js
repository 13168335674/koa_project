/*
 * @Author: ADI
 * @Date: 2021-03-27 10:58:46
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 10:37:36
 */
const router = require("koa-router")();
const {
  isExist,
  register,
  login,
  deleteCurUser,
  changeInfo,
  changePassword,
} = require("../../controller/user");
const { getValidator } = require("../../middlewares/validator");
const userValidate = require("../../validator/user");
const { isTest } = require("../../utils/env");
const { loginCheck } = require("../../middlewares/loginChecks");

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

router.post("/delete", loginCheck, async (ctx, next) => {
  if (isTest) {
    const { userName } = ctx.session.userInfo;
    ctx.body = await deleteCurUser(userName);
  }
});

// 修改用户信息
router.patch(
  "/changeInfo",
  loginCheck,
  getValidator(userValidate),
  async (ctx, next) => {
    const { nickName, city, picture } = ctx.request.body;
    ctx.body = await changeInfo(ctx, { nickName, city, picture });
  }
);

// 修改密码
router.patch(
  "/changePassword",
  loginCheck,
  getValidator(userValidate),
  async (ctx, next) => {
    const { password, newPassword } = ctx.request.body;
    const { userName } = ctx.session.userInfo;
    ctx.body = await changePassword(userName, password, newPassword);
  }
);

//

module.exports = router;

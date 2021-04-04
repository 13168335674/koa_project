/*
 * @Author       : ADI
 * @Date         : 2021-04-03 12:14:33
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 10:26:38
 */
const router = require("koa-router")();
const { login } = require("../../controller/user");
const { loginCheck } = require("../../middlewares/loginChecks");
const { create } = require("../../controller/blog-home");
const { getValidator } = require("../../middlewares/validator");
const blogValidate = require("../../validator/blog");

router.prefix("/api/blog");

// 创建微博
router.post(
  "/create",
  loginCheck,
  getValidator(blogValidate),
  async (ctx, next) => {
    const { content, image } = ctx.request.body;
    const { id: userId } = ctx.session.userInfo;
    ctx.body = await create({ content, image, userId });
  }
);

module.exports = router;

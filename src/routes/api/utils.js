/*
 * @Author       : ADI
 * @Date         : 2021-03-31 20:45:31
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 12:13:00
 */
const router = require("koa-router")();
const { loginCheck } = require("../../middlewares/loginChecks");
const koaFrom = require("formidable-upload-koa");
const { saveFile } = require("../../controller/utils");

router.prefix("/api/utils");

// 上传图片
router.post("/upload", loginCheck, koaFrom(), async (ctx, next) => {
  if (!file) return;
  const file = ctx.req.files["file"];
  const { size, path, name, type } = file;
  ctx.body = await saveFile({
    size,
    name,
    type,
    filePath: path,
  });
});

module.exports = router;

/*
 * @Author       : ADI
 * @Date         : 2021-04-04 11:49:50
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 12:29:35
 */
const router = require("koa-router")();
const { loginCheck } = require("../../middlewares/loginChecks");
const { getProfileBlogList } = require("../../controller/blog-profile");
const { getBlogListStr } = require("../../utils/blog");

router.prefix("/api/profile");

// 加载更多
router.get("/loadMore/:userName/:pageIndex", loginCheck, async (ctx, next) => {
  let { userName, pageIndex } = ctx.params;
  pageIndex = parseInt(pageIndex);
  const result = await getProfileBlogList(userName, pageIndex);
  result.data.blogListTpl = getBlogListStr(result.data.blogList);
  ctx.body = result;
});
module.exports = router;

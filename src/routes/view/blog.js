/*
 * @Author       : ADI
 * @Date         : 2021-04-03 11:26:26
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 12:28:53
 */
const router = require("koa-router")();
const { loginRedirect } = require("../../middlewares/loginChecks");
const { getProfileBlogList } = require("../../controller/blog-profile");

router.get("/", async (ctx, next) => {
  await ctx.render("index");
});

router.get("/profile", loginRedirect, async (ctx, next) => {
  const { userName } = ctx.session.userInfo;
  ctx.redirect(`/profile/${userName}`);
});

router.get("/profile/:userName", loginRedirect, async (ctx, next) => {
  const { userName: curUserName } = ctx.params;
  // 已登录用户的信息
  const myUserInfo = ctx.session.userInfo;
  const myUserName = myUserInfo.userName;
  let curUserInfo = myUserInfo;
  // 获取微博第一页数据
  const result = await getProfileBlogList(curUserName, 0);
  const { isEmpty, blogList, pageSize, pageIndex, count } = result.data;
  await ctx.render("profile", {
    blogData: {
      isEmpty,
      blogList,
      pageSize,
      pageIndex,
      count,
    },
    userData: {
      userInfo: curUserInfo,
      // isMe,
      // fansData: {
      //   count: fansCount,
      //   list: fansList
      // },
      // amIFollowed,
      // followersData: {
      //   count: followersCount,
      //   list: followersList
      // },
      // atCount: atCount.data.count
    },
  });
});

module.exports = router;

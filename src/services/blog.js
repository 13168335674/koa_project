/*
 * @Author       : ADI
 * @Date         : 2021-04-03 12:05:41
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 11:24:16
 */
const { Blog, User } = require("../db/model/index");
const { formatUser, formatBlog } = require("./_format");

// 创建微博
async function createBlog({ userId, content, image }) {
  const result = await Blog.create({
    userId,
    content,
    image,
  });
  return result.dataValues;
}

// 根据用户获取微博列表
async function getBlogListByUser({
  userName,
  pageIndex = 0,
  pageSize = PAGE_SIZE,
}) {
  // 拼接查询条件
  const userWhereOpts = {};
  if (userName) {
    userWhereOpts.userName = userName;
  }
  // 执行查询
  const result = await Blog.findAndCountAll({
    limit: pageSize, // 每页多少条
    offset: pageSize * pageIndex, // 跳过多少条
    order: [["id", "desc"]],
    include: [
      {
        model: User,
        attributes: ["userName", "nickName", "picture"],
        where: userWhereOpts,
      },
    ],
  });
  // 获取dataValues
  let blogList = result.rows.map((row) => row.dataValues);

  // 格式化
  blogList = formatBlog(blogList);
  blogList = blogList.map((blogItem) => {
    const user = blogItem.user.dataValues;
    blogItem.user = formatUser(user);
    return blogItem;
  });
  return {
    count: result.count,
    blogList,
  };
}

module.exports = {
  createBlog,
  getBlogListByUser,
};

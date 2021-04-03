/*
 * @Author       : ADI
 * @Date         : 2021-04-03 12:05:41
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 12:25:59
 */
const { Blog } = require("../db/model/index");

// 创建微博
async function createBlog({ userId, content, image }) {
  const result = await Blog.create({
    userId,
    content,
    image,
  });
  return result.dataValues;
}

module.exports = {
  createBlog,
};

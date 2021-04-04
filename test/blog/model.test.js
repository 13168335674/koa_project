/*
 * @Author       : ADI
 * @Date         : 2021-04-04 10:29:21
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 10:33:40
 */
const { Blog } = require("../../src/db/model/index");

test("微博数据模型各个属性，符合预期", () => {
  const blog = Blog.build({
    userId: 1,
    content: "content",
    image: "/test.png",
  });
  expect(blog.userId).toBe(1);
  expect(blog.content).toBe("content");
  expect(blog.image).toBe("/test.png");
});

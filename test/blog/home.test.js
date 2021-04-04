/*
 * @Author       : ADI
 * @Date         : 2021-04-04 10:35:03
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 10:43:03
 */
const server = require("../server");
const { COOKIE } = require("../testUserInfo");

let BLOG_ID = "";

test("创建一条微博，一个成功", async () => {
  const content = `单元测试字段创建的微博_${Date.now()}`;
  const image = "/test.png";

  const res = await server
    .post("/api/blog/create")
    .send({
      content,
      image,
    })
    .set("cookie", COOKIE);

  expect(res.body.errno).toBe(0);
  expect(res.body.data.content).toBe(content);
  expect(res.body.data.image).toBe(image);

  // 记录BLOG_ID
  BLOG_ID = res.body.data.id;
});

/*
 * @Author: ADI
 * @Date: 2021-03-28 11:51:34
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-28 11:55:49
 */
const { User } = require("../../src/db/model/index");

test("User 模型的各个属性，符合预期", () => {
  // 构建一个内存的User实例，但不会提交数据库
  const user = User.build({
    userName: "adi",
    password: "123",
    nickName: "adi",
    // gender: 1,
    picture: "/xxx.png",
    city: "深圳",
  });
  // 验证各个属性
  expect(user.userName).toBe("adi");
  expect(user.password).toBe("123");
  expect(user.nickName).toBe("adi");
  expect(user.gender).toBe(3);
  expect(user.picture).toBe("/xxx.png");
  expect(user.city).toBe("深圳");
});

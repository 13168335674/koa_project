/*
 * @Author: ADI
 * @Date: 2021-03-20 10:43:52
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-21 09:35:29
 */
const seq = require("./seq");

require("./model/index");

// 测试链接
seq
  .authenticate()
  .then(() => {
    console.log("ok");
  })
  .catch(() => {
    console.log("error");
  });

// 执行同步
seq.sync({ force: true }).then(() => {
  console.log("同步成功");
  process.exit();
});

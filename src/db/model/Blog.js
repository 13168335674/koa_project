/*
 * @Author: ADI
 * @Date: 2021-03-21 09:25:04
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-21 09:25:04
 */
const seq = require("../seq");
const { STRING, INTEGER, TEXT } = require("../type");

const Blog = seq.define("blog", {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: "用户ID"
  },
  content: {
    type: TEXT,
    allowNull: false,
    comment: "微博内容"
  },
  image: {
    type: STRING,
    comment: "图片地址"
  }
});

module.exports = Blog;

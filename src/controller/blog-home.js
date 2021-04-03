/*
 * @Author       : ADI
 * @Date         : 2021-04-03 12:06:22
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 12:29:31
 */
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const { createBlogFailInfo } = require("../model/ErrorInfo");
const { createBlog } = require("../services/blog");
const { doCrypto } = require("../utils/cryp");
const { Blog } = require("../db/model");

// 创建微博
async function create({ userId, content, image }) {
  try {
    const blog = await createBlog({
      userId,
      content,
      image,
    });
    return new SuccessModel(blog);
  } catch (ex) {
    console.error(ex.message, ex.stack);
    return new ErrorModel(createBlogFailInfo);
  }
}

module.exports = { create };

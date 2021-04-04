/*
 * @Author       : ADI
 * @Date         : 2021-04-04 10:59:02
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 11:31:04
 */
const xss = require("xss");
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const {} = require("../model/ErrorInfo");
const { getBlogListByUser } = require("../services/blog");
const { doCrypto } = require("../utils/cryp");
const { Blog } = require("../db/model");
const { PAGE_SIZE } = require("../config/constant");

async function getProfileBlogList(userName, pageIndex = 0) {
  const result = await getBlogListByUser({
    userName,
    pageIndex,
    pageSize: PAGE_SIZE,
  });
  const blogList = result.blogList;
  return new SuccessModel({
    isEmpty: blogList.length === 0,
    blogList,
    pageSize: PAGE_SIZE,
    pageIndex,
    count: result.count,
  });
}

module.exports = {
  getProfileBlogList,
};

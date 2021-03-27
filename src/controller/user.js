/*
 * @Author: ADI
 * @Date: 2021-03-27 11:03:01
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 11:37:17
 */
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const { registerUserNameNotExistInfo } = require("../model/ErrorInfo");
const { getUserInfo } = require("../services/user");

async function isExist(userName) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
    return new SuccessModel(userInfo);
  } else {
    return new ErrorModel(registerUserNameNotExistInfo);
  }
}

module.exports = {
  isExist,
};

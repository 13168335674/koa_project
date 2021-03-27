/*
 * @Author: ADI
 * @Date: 2021-03-27 11:03:01
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 12:01:46
 */
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const {
  registerUserNameNotExistInfo,
  registerUserNameExistInfo,
  registerFailInfo,
} = require("../model/ErrorInfo");
const { getUserInfo, createUser } = require("../services/user");

/**
 * @author: ADI
 * @Date: 2021-03-27 11:52:14
 * @param {*} userName
 * @return {*}
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
    return new SuccessModel(userInfo);
  } else {
    return new ErrorModel(registerUserNameNotExistInfo);
  }
}

/**
 * @author: ADI
 * @Date: 2021-03-27 11:52:16
 * @param {*} userName
 * @param {*} password
 * @param {*} gender
 * @return {*}
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
    return new ErrorModel(registerUserNameExistInfo);
  }
  // 注册
  try {
    await createUser({ userName, password, gender });
    return new SuccessModel();
  } catch (error) {
    console.log(`error`, error.message, error.stack);
    return new ErrorModel(registerFailInfo);
  }
}

module.exports = {
  isExist,
  register,
};

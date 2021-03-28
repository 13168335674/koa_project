/*
 * @Author: ADI
 * @Date: 2021-03-27 11:03:01
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-28 12:02:26
 */
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const {
  registerUserNameNotExistInfo,
  registerUserNameExistInfo,
  registerFailInfo,
  loginFailInfo,
  deleteUserFailInfo,
} = require("../model/ErrorInfo");
const { getUserInfo, createUser, deleteUser } = require("../services/user");
const { doCrypto } = require("../utils/cryp");
const { User } = require("../db/model");
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
  password = doCrypto(password);
  // 注册
  try {
    await createUser({ userName, password, gender });
    return new SuccessModel();
  } catch (error) {
    console.log(`error`, error.message, error.stack);
    return new ErrorModel(registerFailInfo);
  }
}

/**
 * @author: ADI
 * @Date: 2021-03-28 10:37:09
 * @param {*} ctx
 * @param {*} userName
 * @param {*} password
 * @return {*}
 */
async function login({ ctx, userName, password }) {
  const userInfo = await getUserInfo(userName, doCrypto(password));
  if (!userInfo) {
    return new ErrorModel(loginFailInfo);
  }
  if (ctx.session.userInfo == null) {
    ctx.session.userInfo = userInfo;
  }
  return new SuccessModel();
}

async function deleteCurUser(userName) {
  const result = await deleteUser(userName);
  if (result) {
    return new SuccessModel();
  }
  return new ErrorModel(deleteUserFailInfo);
}

module.exports = {
  isExist,
  register,
  login,
  deleteCurUser,
};

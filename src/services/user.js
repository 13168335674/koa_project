/*
 * @Author: ADI
 * @Date: 2021-03-27 11:04:50
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 11:59:21
 */
const { User } = require("../db/model/index");
const { formatUser } = require("./_format");

/**
 * @author: ADI
 * @Date: 2021-03-27 11:57:52
 * @param {*} userName
 * @param {*} password
 * @return {*}
 */
async function getUserInfo(userName, password) {
  const whereOpt = {
    userName,
  };
  if (password) {
    Object.assign(whereOpt, { password });
  }
  const result = await User.findOne({
    attributes: ["id", "userName", "nickName", "picture", "city"],
    where: whereOpt,
  });
  if (result == null) {
    return result;
  }
  // format
  const formatRes = formatUser(result.dataValues);

  return formatRes;
}

/**
 * @author: ADI
 * @Date: 2021-03-27 11:57:49
 * @param {*} userName
 * @param {*} password
 * @param {*} gender
 * @param {*} nickName
 * @return {*}
 */
async function createUser({ userName, password, gender = 3, nickName }) {
  const result = await User.create({
    userName,
    password,
    nickName: nickName ? nickName : userName,
    gender,
  });
  return result.dataValues;
}

module.exports = {
  getUserInfo,
  createUser,
};

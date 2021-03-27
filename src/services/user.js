/*
 * @Author: ADI
 * @Date: 2021-03-27 11:04:50
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 11:32:44
 */
const { User } = require("../db/model/index");
const { formatUser } = require("./_format");

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

module.exports = {
  getUserInfo,
};

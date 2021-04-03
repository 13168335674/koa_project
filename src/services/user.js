/*
 * @Author: ADI
 * @Date: 2021-03-27 11:04:50
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-01 20:47:31
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

/**
 * @author: ADI
 * @Date: 2021-03-28 11:59:49
 * @param {*} userName
 * @return {*}
 */
async function deleteUser(userName) {
  const result = await User.destroy({
    where: {
      userName,
    },
  });
  // 删除的行数
  return result > 0;
}

async function updateUser(
  { newPassword, newNickName, newPicture, newCity },
  { userName, password }
) {
  const updateData = {};
  if (newPassword) {
    updateData.password = newPassword;
  }
  if (newNickName) {
    updateData.nickName = newNickName;
  }
  if (newPicture) {
    updateData.picture = newPicture;
  }
  if (newCity) {
    updateData.city = newCity;
  }
  const whereData = {
    userName,
  };
  const result = await User.update(updateData, {
    where: whereData,
  });
  return result[0] > 0;
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser,
  updateUser,
};

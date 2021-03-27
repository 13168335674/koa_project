/*
 * @Author: ADI
 * @Date: 2021-03-21 09:27:01
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 12:07:16
 */
const crypto = require("crypto");
const { CRYPTO_SECRET_KEY } = require("../config/secretKeys");

/**
 * @Author: ADI
 * @url: https://xiaokang.me
 * @param {String} content 要加密的明文
 * @description: MD5加密
 */
function _md5(content) {
  const md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
}

/**
 * @Author: ADI
 * @url: https://xiaokang.me
 * @param {*} content 明文
 * @description: 加密方法
 */
function doCrypto(content) {
  const str = `password=${content}&key=${CRYPTO_SECRET_KEY}`;
  return _md5(str);
}

module.exports = {
  doCrypto,
};

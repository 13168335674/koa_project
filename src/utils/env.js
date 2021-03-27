/*
 * @Author: ADI
 * @Date: 2021-03-21 09:17:28
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-21 09:17:29
 */
const ENV = process.env.NODE_ENV;

module.exports = {
  isDev: ENV === "dev",
  notDev: ENV !== "dev",
  isProd: ENV === "production",
  notProd: ENV !== "production",
  isTest: ENV === "test",
  notTest: ENV !== "test"
};

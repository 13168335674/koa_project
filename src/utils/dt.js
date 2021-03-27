/*
 * @Author: ADI
 * @Date: 2021-03-21 09:18:08
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-21 09:22:23
 */
const { format } = require("date-fns");

/**
 * 格式化时间，如 09.05 23:02
 * @param {string} str 时间字符串
 */
function timeFormat(str) {
  return format(new Date(str), "MM.dd HH:mm");
}

module.exports = {
  timeFormat
};

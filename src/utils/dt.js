/*
 * @Author: ADI
 * @Date: 2021-03-21 09:18:08
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-04 11:21:00
 */
const { format } = require("date-fns");

function timeFormat(str) {
  return format(new Date(str), "MM.dd HH:mm");
}

module.exports = {
  timeFormat,
};

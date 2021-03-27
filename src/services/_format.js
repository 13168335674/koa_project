/*
 * @Author: ADI
 * @Date: 2021-03-27 11:11:44
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 11:17:15
 */
const { DEFAULT_PICTURE } = require("../config/constant");
function _formatUserPicture(obj) {
  if (obj.picture == null) {
    obj.picture = DEFAULT_PICTURE;
  }
  return obj;
}

function formatUser(list) {
  if (list == null) return list;
  if (!Array.isArray(list)) {
    list = [list];
  }
  const result = list.map(_formatUserPicture);
  return result.length === 1 ? result[0] : result;
}

module.exports = {
  formatUser,
};

/*
 * @Author       : ADI
 * @Date         : 2021-03-31 20:50:31
 * @LastEditors  : ADI
 * @LastEditTime : 2021-03-31 21:04:13
 */
const { SuccessModel, ErrorModel } = require("../model/ResModel");
const { uploadFileSizeFailInfo } = require("../model/ErrorInfo");
const fse = require("fs-extra");
const path = require("path");
// 文件最大体积 （5m）
const MAX_SIZE = 5 * 1024 * 1024 * 1024;
// 存储目录
const DIST_FOLDER_PATH = path.join(__dirname, "..", "..", "uploadFiles");
// 是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then((exist) => {
  if (!exist) {
    fse.ensureDir(DIST_FOLDER_PATH);
  }
});
/**
 * @author      : ADI
 * @Date        : 2021-03-31 20:57:25
 * @param {string} name 文件名
 * @param {String} type 文件类型
 * @param {String} size 文件大小
 * @param {String} filePath 文件地址
 * @description: 存储文件
 */
async function saveFile({ name, type, size, filePath }) {
  if (size > MAX_SIZE) {
    await fse.remove(filePath);
    return new ErrorModel(uploadFileSizeFailInfo);
  }
  // move file
  const fileName = Date.now() + "." + name;
  const distFilePath = path.join(DIST_FOLDER_PATH, fileName); // 目的地
  await fse.move(filePath, distFilePath);
  // 返回信息
  return new SuccessModel({
    url: "/" + fileName,
  });
}

module.exports = {
  saveFile,
};

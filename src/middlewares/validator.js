/*
 * @Author: ADI
 * @Date: 2021-03-27 12:40:22
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 12:46:57
 */
const { ErrorModel } = require("../model/ResModel");
const { jsonSchemaFileInfo } = require("../model/ErrorInfo");
/**
 * @author: ADI
 * @Date: 2021-03-27 12:40:51
 * @param {*}
 * @return {*}
 */
function getValidator(validateFn) {
  async function validator(ctx, next) {
    const data = ctx.request.body;
    const error = validateFn(data);
    if (error) {
      ctx.body = new ErrorModel(jsonSchemaFileInfo);
      return;
    }
    await next();
  }
  return validator;
}

module.exports = { getValidator };

/*
 * @Author: ADI
 * @Date: 2021-03-28 11:12:40
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 10:50:50
 */
const { ErrorModel } = require("../model/ResModel");
const { loginCheckFailInfo } = require("../model/ErrorInfo");

/**
 * @author: ADI
 * @Date: 2021-03-28 11:15:59
 * @param {*} ctx
 * @param {*} next
 * @return {*}
 */
async function loginCheck(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    await next();
    return;
  }
  ctx.body = new ErrorModel(loginCheckFailInfo);
}

async function loginRedirect(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    await next();
    return;
  }
  const curUrl = ctx.url;
  ctx.redirect("/login?url=" + encodeURIComponent(curUrl));
}

module.exports = {
  loginCheck,
  loginRedirect,
};

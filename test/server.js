/*
 * @Author: ADI
 * @Date: 2021-03-21 12:29:34
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-28 11:48:17
 */
const request = require("supertest");
const server = require("../src/app").callback();

module.exports = request(server);

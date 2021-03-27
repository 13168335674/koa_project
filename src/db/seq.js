/*
 * @Author: ADI
 * @Date: 2021-03-20 10:32:28
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-21 09:21:44
 */
const Sequelize = require("sequelize");
const { MYSQL_CONF } = require("../config/db");
const { isProd, isTest } = require("../utils/env");
const { host, user, password, database } = MYSQL_CONF;
const conf = {
  host: host,
  dialect: "mysql"
};

// 单元测试时不打印sql语句
if (isTest) {
  conf.logging = () => {};
}

// 生产环境使用连接池
if (isProd) {
  // 连接池
  conf.pool = {
    max: 5,
    min: 0,
    idle: 10000
  };
}

// 数据库名、账户名、密码
const seq = new Sequelize(database, user, password, conf);

module.exports = seq;

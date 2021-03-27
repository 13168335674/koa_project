const env = process.env.NODE_ENV;

let MYSQL_CONF = {
  host: "localhost",
  user: "root",
  password: "adi123456",
  port: "3306",
  database: "koa2_weibo_db"
};
let REDIS_CONF = {
  port: 6379,
  host: "127.0.0.1"
};

if (env === "dev") {
  MYSQL_CONF = MYSQL_CONF;
  REDIS_CONF = REDIS_CONF;
}

if (env === "production") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "adi123456",
    port: "3306",
    database: "koa2_weibo_db"
  };
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1"
  };
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
};

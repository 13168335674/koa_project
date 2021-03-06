/*
 * @Author: ADI
 * @Date: 2021-03-21 09:25:25
 * @LastEditors  : ADI
 * @LastEditTime : 2021-04-03 11:19:11
 */
const User = require("./User");
const Blog = require("./Blog");
// const UserRelation = require("./UserRelation");
// const AtRelation = require("./AtRelation");
// 创建外键
Blog.belongsTo(User, {
  foreignKey: "userId",
});

// UserRelation.belongsTo(User, {
//   foreignKey: "followerId"
// });
// User.hasMany(UserRelation, {
//   foreignKey: "userId"
// });

// Blog.belongsTo(UserRelation, {
//   foreignKey: "userId",
//   targetKey: "followerId"
// });

// Blog.hasMany(AtRelation, {
//   foreignKey: "blogId"
// });

module.exports = {
  User,
  Blog,
  // UserRelation,
  // AtRelation
};

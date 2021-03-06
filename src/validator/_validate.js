/**
 * @description:
 * @author: ADI
 * @url: https://xiaokang.me
 * @Date: 2021-3-27 16:18:41
 * @LastEditTime: 2021-3-27 16:19:32
 * @LastEditors: ADI
 */

const Ajv = require("ajv").default;
const ajv = new Ajv({
  // allErrors: true // 输出所有的错误（比较慢）
});

/**
 * json schema 校验
 * @param {Object} schema json schema 规则
 * @param {Object} data 待校验的数据
 */
function validate(schema, data = {}) {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  // console.log(validate, valid);
  // const valid = ajv.validate(schema, data)
  if (!valid) {
    console.log(`validate.errors[0]`, validate.errors[0]);
    return validate.errors[0];
  }
}

module.exports = validate;

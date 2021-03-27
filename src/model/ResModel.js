/*
 * @Author: ADI
 * @Date: 2021-03-27 11:21:07
 * @LastEditors: ADI
 * @LastEditTime: 2021-03-27 11:23:37
 */
class BaseModel {
  constructor({ errno, data, message }) {
    this.errno = errno;
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({
      errno: 0,
      data,
    });
  }
}

class ErrorModel extends BaseModel {
  constructor({ errno, message }) {
    super({
      errno,
      message,
    });
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
  BaseModel,
};

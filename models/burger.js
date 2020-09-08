const orm = require('../config/orm');

module.exports = model = {
  all: async function () {
    return await orm.selectAll("burgers");
  }
}
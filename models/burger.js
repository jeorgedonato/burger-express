const orm = require('../config/orm');

module.exports = model = {
  all: async function () {
    try {
      return await orm.selectAll("burgers");
    } catch (error) {
      throw error;
    }
  },
  create: async function (cols, vals) {
    try {
      return await orm.insertOne("burgers", cols, vals);
    } catch (error) {
      throw error;
    }
  },
  update: async function (objCols, objCond) {
    try {
      return await orm.updateOne("burgers", objCols, objCond);
    } catch (error) {
      throw error;
    }
  }
}
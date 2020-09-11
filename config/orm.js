const Database = require('./connection');
const { printQuestionMarks, objToSql } = require('../helpers/helper');

module.exports = orm = {
  selectAll: async function (tableInput) {
    const db = new Database();
    const queryString = "SELECT * FROM " + tableInput + ";";
    const result = await db.query(queryString);
    db.close();
    return result;
  },
  selectWhere: async function (tableInput, condition) {
    const db = new Database();
    const queryString = "SELECT * FROM " + tableInput + ";";
    const result = await db.query(queryString);
    db.close();
    return result;
  },
  insertOne: async function (tableInput, cols, vals) {
    try {
      const db = new Database();
      let queryString = "INSERT INTO " + tableInput;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
      const result = await db.query(queryString, vals);
      console.log(queryString);
      db.close();
      return result;
    } catch (error) {
      throw error;
    }
  },
  updateOne: async function (tableInput, objColVals, condition) {
    try {
      const db = new Database();
      let queryString = "UPDATE " + tableInput;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
      // console.log(queryString);
      const result = await db.query(queryString, [objColVals, condition]);

      db.close();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
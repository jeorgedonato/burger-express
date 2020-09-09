const Database = require('./connection');
const { printQuestionMarks, objToSql } = require('../helpers/helper');
const db = new Database();


module.exports = orm = {
  selectAll: async function (tableInput) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    const result = await db.query(queryString);
    db.close();
    return result;
  },
  insertOne: async function (tableInput, cols, vals) {
    const queryString = "INSER INTO " + tableInput + ";";
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
  },
  updateOne: function (tableInput, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableInput;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    const result = await db.query(queryString);
    console.log(queryString);
    db.close();
    return result;
  },
}
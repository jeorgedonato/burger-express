const Database = require('./connection');
const db = new Database();
module.exports = orm = {
  selectAll: async function (tableInput) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    const result = await db.query(queryString);
    db.close();
    return result;
  },
  insertOne: async function (tableInput) {
    const queryString = "INSER INTO " + tableInput + ";";
    const result = await db.query(queryString);
    db.close();
    return result;
  },
}
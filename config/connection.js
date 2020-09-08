const mysql = require('mysql');

// Creating a class for database controls
class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  }
  //Made query() to a promise
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }
  //Made end() to a promise
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err)
          return reject(err);
        resolve();
      });
    });
  }
}

module.exports = Database;

// module.exports = {
//   connection: mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_ROOT,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
//   }),
//   query: function (sql, args) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, args, (err, rows) => {
//         if (err)
//           return reject(err);
//         resolve(rows);
//       });
//     });
//   },
//   close: function () {
//     return new Promise((resolve, reject) => {
//       this.connection.end(err => {
//         if (err)
//           return reject(err);
//         resolve();
//       });
//     });
//   }
// }
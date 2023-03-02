const mysql = require("mysql2");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "paras23082011",
  database: "engineeringdb",
});

module.exports = { connect };

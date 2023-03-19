const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mobiew416543",
  database: "vacCenter",
});

module.exports = connection;

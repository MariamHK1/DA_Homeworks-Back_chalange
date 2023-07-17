const mysql2 = require("mysql2");
require("dotenv").config();

const db = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DBNAME,
});

db.connect(function (err) {
  if (err) throw err;
  const sql = "SHOW TABLES";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    process.exit(0);
  });
});
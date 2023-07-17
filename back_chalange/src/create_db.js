const mysql2 = require("mysql2");
require("dotenv").config();

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database server: ", err);
    return;
  }
  console.log("Connected to the database server");

  const createDbQuery = "CREATE DATABASE mydb";
  connection.query(createDbQuery, (err) => {
    if (err) {
      console.error("Error creating the database: ", err);
    } else {
      console.log("Database created");
    }
  });
});
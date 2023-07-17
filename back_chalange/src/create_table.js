const mysql2 = require("mysql2");
require("dotenv").config();

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DBNAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database");

  const createTableQuery = `
  CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25),
    price INT,
    description VARCHAR(200),
    image VARCHAR(60)
  )
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error("Error creating table: ", err);
      connection.end();
      return;
    }
    console.log("Table created successfully");
   
  });
});


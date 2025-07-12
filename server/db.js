const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

db.connect((err) => {
  if (err) {
    console.log('DB connection error:', err);
    return;
  }
  console.log('MySQL connected!');
});

module.exports = db;

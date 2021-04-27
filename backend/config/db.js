const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'blackbear1186',
  password: 'jesus1',
  database: 'sqlDatabase',
})

module.exports = db;
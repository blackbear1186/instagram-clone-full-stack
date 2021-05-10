const express = require('express')
const mysql = require('mysql')
const db = require('./config/db')
const createUsers = express.Router()

createUsers.get('/users', (req, res) => {
  let sql = 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255)';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result)
    res.send("Users created.")
  })
})

// createUsers.get('/alter', (req, res) => {
//   let sql = 'ALTER TABLE users MODIFY username VARCHAR(75) NOT NULL UNIQUE';
//   db.query(sql, (err, result) => {
//     console.log(result)
//     res.send('Table altered.')
//   })
// })

module.exports = createUsers;

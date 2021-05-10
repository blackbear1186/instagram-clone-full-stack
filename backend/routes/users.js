const mysql = require('mysql')
const express = require('express')
const getusers = express.Router()
const db = require('../config/db')

getusers.get('/getusers', (req, res) => {
  let sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if(err) throw err
    console.log(result)
    res.json(result)
  })
})

// app.get('/alter', (req, res) => {
//   let sql = 'ALTER TABLE users MODIFY username VARCHAR(50) NOT NULL UNIQUE';
//   db.query(sql, (err, result) => {
//     console.log(result)
//     res.send('Table altered.')
//   })

// })

module.exports = getusers;
const mysql = require('mysql')
const express = require('express')
const register = express.Router()
const db = require('../config/db')

register.post('/register', (req, res) => {

  const username = req.body.username
  const password = req.body.password

  let sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  
  db.query(sql, [username, password], (err, result) => {
    if(err) throw err;
    console.log(result)
    res.send('User added from client.')
  })
})

module.exports = register;
const mysql = require('mysql')
const express = require('express')
const register = express.Router()
const db = require('../config/db')
const bcrypt = require('bcrypt')

register.post('/register', (req, res) => {

  const username = req.body.username
  const password = req.body.password

  const salt = 10;


  let sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  
  bcrypt.hash(password, salt, (err, hash) => {
    if(err) {
      console.log(err)
    }
    db.query(sql, [username, hash], (err, result) => {
      if(err) throw err;
      console.log(result)
      res.send('User added from client.')
    })
  })
 
})

module.exports = register;
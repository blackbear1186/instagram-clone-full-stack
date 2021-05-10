const mysql = require('mysql')
const express = require('express')
const login = express.Router()
const db = require('../config/db')

login.post('/login', (req, res) => {

  const username = req.body.username
  const password = req.body.password

  let sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
  db.query(sql, [username, password], (err, result) => {
    if(err) res.send({err: err})
    if(result.length > 0) {
      res.send(result)
      console.log(result)

    } else {
      res.send({ message: "Wrong username/password combination. "})
    }
  })
})

module.exports = login;
const mysql = require('mysql')
const express = require('express')
const login = express.Router()
const db = require('../config/db')
const bcrypt = require('bcrypt')

login.post('/login', (req, res) => {

  const username = req.body.username
  const password = req.body.password

  const salt = 10;

  let sql = 'SELECT * FROM users WHERE username = ?';
  
  db.query(sql, username, (err, result) => {
    if(err) res.send({err: err})
    if(result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if(response) {
          res.send(result)
        } else {
            res.send({ message: "Wrong username/password combination. "})

        }
      })
      console.log(result)
    } else {
      res.send({ message: "User does not exist."})
    }
  })
})

module.exports = login;
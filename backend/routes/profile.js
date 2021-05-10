const mysql = require('mysql')
const express = require('express')
const profile = express.Router()
const db = require('../config/db')

// profile.get('/firstuser', (req, res) => {
//   let sql = 'INSERT INTO users (username, password) VALUES("blackbear", "1234bob")';
//   db.query(sql, (err, result) => {
//     if(err) throw err
//     console.log(result)
//     res.send('first user inserted.')
//   })
// })

module.exports = profile;
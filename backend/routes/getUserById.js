const mysql = require('mysql')
const express = require('express')
const router = express.Router()
const db = require('../config/db')

// router.get('/', (req, res) => {
//   let sql = `SELECT * FROM user WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     console.log(result)
//     res.send('Success')
//   })
// })

// module.exports = router;

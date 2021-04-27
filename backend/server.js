const express = require('express')
const db = require('./config/db')
const app = express()

const PORT = process.env.PORT || 5000;


db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('Connected')
})
app.use('/getusers', require('./routes/users'))


// // app.get('/createdb', (req, res) => {
// //   let sql = 'CREATE DATABASE sqlDatabase';
// //   db.query(sql, (err, result) => {
// //     if(err) throw err;
// //     console.log(result)
// //     res.send('Database created...');
// //   })
// // })

// // app.get('/user', (req, res) => {
// //   let sql = 'CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), weight VARCHAR(255))';
// //   db.query(sql, (err, result) => {
// //       if(err) throw err;
// //       console.log(result)
// //       res.send('Users created.')
// //   })
// // })
// app.get('/firstuser', (req, res) => {
//   let sql = 'INSERT INTO user (name, weight) VALUES("Berlin Johnson", 188 )';
//   db.query(sql, (err, result) => {
//     if(err) throw err
//     console.log(result)
//     res.send('first user inserted.')
//   })
// })

// // app.get('/getusers', (req, res) => {
// //   let sql = 'SELECT * FROM user';
// //   db.query(sql, (err, result) => {
// //     if(err) throw err
// //     console.log(result)
// //     res.send('Got all users.')
// //   })
// // })
// app.use('/getusers', require('./routes/users'))

// app.get('/getuser/:id', (req, res) => {
//   let sql = `SELECT * FROM user WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     console.log(result)
//     res.send('User fetched')
//   })
// })

// app.get('/updateuser/:id', (req, res) => {
//   let newName = 'Berlin Johnson';
//   let sql = `UPDATE user SET name = "${newName}"  WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     console.log(result)
//     res.send('updated user')
//   })
// })

// app.get('/deleteuser/:id', (req, res) => {
//   let sql = `DELETE FROM user WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     console.log(result)
//     res.send('Deleted user...')
//   })
// })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app;
const express = require('express')
const db = require('./config/db')
const app = express()
const cors = require('cors')

const getusers = require('./routes/users')
const addUser = require('./routes/profile')
const register = require('./routes/register')

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;
// app.use(express.json())
// app.use(express.urlencoded())

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('Connected')
})

app.use(getusers)
app.use(addUser)
app.use(register)


// app.post('/register', (req, res) => {

//   const username = req.body.username
//   const password = req.body.password

//   let sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
//   // db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password],
//   //   (err, result) => {
//   //     console.log(err)
//   //   })
//   db.query(sql, [username, password], (err, result) => {
//     if(err) throw err;
//     console.log(result)
//     res.send('User added from client.')
//   })
// })


// app.use('/getusers/:id', require('./routes/getUserById'))

// app.get('/firstuser', (req, res) => {
//   let sql = 'INSERT INTO user (name, weight) VALUES("Berlin Johnson", 188 )';
//   db.query(sql, (err, result) => {
//     if(err) throw err
//     console.log(result)
//     res.send('first user inserted.')
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
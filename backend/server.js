const express = require('express')
const db = require('./config/db')
const app = express()
const cors = require('cors')

const getusers = require('./routes/users')
const addUser = require('./routes/profile')
const register = require('./routes/register')
const login = require('./routes/login')

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;


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
app.use(login)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// app.use('/getusers/:id', require('./routes/getUserById'))

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



module.exports = app;
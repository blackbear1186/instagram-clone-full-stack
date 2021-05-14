const express = require('express')
const db = require('./config/db')
const app = express()
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcrypt')


const redis = require('redis')
const redisStore = require('connect-redis')(session)

const getusers = require('./routes/users')
const addUser = require('./routes/profile')
const register = require('./routes/register')
const login = require('./routes/login')

app.use(express.json())
// app.use(express.urlencoded({ extended: true}))
// app.use(cors())

const redisClient = redis.createClient()

redisClient.on('error', (err) => {
  console.log('error:', err)
})

redisClient.on('connect', err => {
  console.log('Connected to redis successfully.')
})

// app.use(session({
//   store: new redisStore({host: 'localhost', port: 5000, client: redisClient}),
//   name: 'redis_demo',
//   secret: 'subscribe',
//   resave: false,
//   cookie: { secure: false, maxAge: 60000},
//   saveUninitialized: true,

// }))

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}))

// app.use(session({
//   key: 'userId',
//   secret: 'subscribe',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     maxAge: 60 * 60 * 24,
//   },
// }))

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

// app.post('/login', (req, res) => {

//   const username = req.body.username
//   const password = req.body.password

//   const salt = 10;

//   let sql = 'SELECT * FROM users WHERE username = ?';
  
//   db.query(sql, username, (err, result) => {
//     if(err) res.send({err: err})
//     if(result.length > 0) {
//       bcrypt.compare(password, result[0].password, (error, response) => {
//         if(response) {
//           // req.session.user = result;
//           console.log(req.session.user)
//           res.send(result)
//         } 
//       })
//       console.log(result)
//     } else {
//       res.send({ message: "User does not exist."})
//     }
//   })
// })

// app.get('/login', (req, res) => {
//   if(req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user })
//   } else {
//     res.send({ loggedIn: false })
//   }
// })

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
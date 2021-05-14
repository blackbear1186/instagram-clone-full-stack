const mysql = require('mysql')
const express = require('express')
const login = express.Router()
const db = require('../config/db')
const bcrypt = require('bcrypt')
const session = require('express-session')
const redis = require('redis')
const redisStore = require('connect-redis')(session)

const redisClient = redis.createClient()


login.use(session({
  store: new redisStore({host: 'localhost', port: 6379, client: redisClient}),
  name: 'userId',
  secret: 'secret$%23',
  resave: true,
  cookie: { path: '/login', secure: false, httpOnly: false, maxAge: 60000},
  saveUninitialized: true,
  
}))

login.get('/login', (req, res) => {
  const sess = req.session;
  console.log('Session ID: ', req.sessionID)
  if(req.session.counter) {
    req.session.counter = req.session.counter + 1;
  } else {
    req.session.counter = 1;
  }
  res.send('Counter: ' + req.session.counter)
  // if(sess.username) {
  //     res.send({loggedIn: true, username: username})
  //   } else {
  //     res.send({ loggedIn: false})
  //   }
})

login.post('/login', (req, res) => {

// const sess = req.session;
const { username, password } = req.body
// sess.username = username;
// sess.password = password;

  const salt = 10;

  let sql = 'SELECT * FROM users WHERE username = ?';
  
  db.query(sql, username, (err, result) => {
    if(err) res.send({err: err})
    if(result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if(response) {
          req.session.user = user;
          console.log(result)
          res.send(result)
          res.end('success')
        } 
      })
      console.log(result)
    } else {
      res.send({ message: "User does not exist."})
    }
  })
})

// login.get('/login', (req, res) => {
//   if(req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user })
//   } else {
//     res.send({ loggedIn: false })
//   }
// })


module.exports = login;
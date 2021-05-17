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

login.route('/login')
  .post((req, res) => {
    const { username, password } = req.body

    const salt = 10;
  
    let sql = 'SELECT * FROM users WHERE username = ?';
    
    db.query(sql, username, (err, result) => {
      if(err) res.send({err: err})
      if(result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if(response) {
            
            req.session.user = user;
            res.redirect('/')
            console.log(result)
            res.send(result)
            // res.end('success')
          } 
        })
        console.log(result)
      } else {
        res.send({ message: "User does not exist."})
      }
    })
  })
  .get((req, res, next) => {
    console.log('Session ID: ', req.sessionID)
  
    res.send('Counter: ' + req.session.counter)
    next()
  })
  
// login.get('/login', (req, res, next) => {
//   console.log('Session ID: ', req.sessionID)
  
//     if(req.session.counter) {
//       req.session.counter = req.session.counter + 1;
//     } else {
//       req.session.counter = 1;
//     }
//     res.send('Counter: ' + req.session.counter)
//     next()
// })

// login.get('/login', (req, res, next) => {
//   if(req.session) {
//     res.send({loggedIn: true, username: username})
//   } else {
//     res.send({loggedIn: false})
//   }
//   next()
// })

// login.post('/login', (req, res) => {

  // const { username, password } = req.body

  // const salt = 10;

  // let sql = 'SELECT * FROM users WHERE username = ?';
  
  // db.query(sql, username, (err, result) => {
  //   if(err) res.send({err: err})
  //   if(result.length > 0) {
  //     bcrypt.compare(password, result[0].password, (error, response) => {
  //       if(response) {
          
  //         req.session.user = user;
  //         res.redirect('/')
  //         console.log(result)
  //         res.send(result)
  //         // res.end('success')
  //       } 
  //     })
  //     console.log(result)
  //   } else {
  //     res.send({ message: "User does not exist."})
  //   }
  // })
// })

// login.use((req, res, next) => {
//   if(req.session && req.session.authenticated) {
//     return next()
//   } else {
//     return res.redirect('/login')
//   }
// })


module.exports = login;
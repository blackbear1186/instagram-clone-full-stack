const mysql = require('mysql')
const express = require('express')
const register = express.Router()
const db = require('../config/db')
const bcrypt = require('bcrypt')
const joi = require('joi')
const jwt = require('jsonwebtoken')
const { schema } = require('../model/validate')

const emailPattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/i;
const passwordPattern = /[a-zA-Z0-9]{3,10}/;

 
register.post('/register', async (req, res) => {

 

  const salt = 10;
  const { username, password } = req.body;

  let sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  
  bcrypt.hash(password, salt, async (error, hash) => {
    try{
     db.query(sql, [username, hash], async (err, result) => {
       

        const value = schema.validateAsync(req.body)
       
          console.log(result)
          return res.send(value)
        })
    } catch(error){
      console.error(error);
    }
    
  })
 
  // if(user){
  //   res.json({message: 'User already exists'})
  // } 
})

module.exports = register;
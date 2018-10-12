//const bcrypt = require('bcrypt')
const express = require('express')
const user = express.Router()
const User = require('../models/users.js')


user.get('/new', (req, res) => {
  res.render('users/new.ejs')
})

user.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
    }
    console.log(createdUser);
    res.redirect('sessions/new')
  })
})

module.exports = user
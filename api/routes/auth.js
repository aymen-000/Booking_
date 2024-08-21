const express = require('express')
const {Register, Login} = require('../controllers/auth.controllers')
const Router = express.Router()
// Registration 
Router.post('/register' , Register)
// Login 
Router.post('/login' , Login)
module.exports = Router
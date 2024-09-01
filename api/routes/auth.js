const express = require('express')
const {Register, Login , Logout} = require('../controllers/auth.controllers')
const Router = express.Router()
// Registration 
Router.post('/register' , Register)
// Login 
Router.post('/login' , Login)
// Logout 
Router.get('/logout' , Logout)
module.exports = Router
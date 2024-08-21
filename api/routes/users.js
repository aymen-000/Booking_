const express = require('express');
const { deleteUser, updateUser, getOneUser, getAllUsers } = require('../controllers/users.controllers');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');
const Router = express.Router();

// Define the routes for user management

// Get all users
Router.get('/users',verifyAdmin ,  getAllUsers);

// Get one user by ID
Router.get('/users/:id',verifyAdmin ,  getOneUser);

// Update a user by ID
Router.put('/users/:id',verifyUser ,  updateUser);

// Delete a user by ID
Router.delete('/users/:id',verifyUser,  deleteUser);

module.exports = Router;
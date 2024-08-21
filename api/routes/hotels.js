const express = require('express');
const { getAllHotels, getOneHotel, updateHotel, deleteHotel, createHotel } = require('../controllers/hotels.controllers');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');
const Router = express.Router();

// Create a hotel
Router.post('/create',verifyAdmin ,  createHotel);

// Update a hotel by ID
Router.put('/update/:id', verifyAdmin , updateHotel);

// Get all hotels
Router.get('/all', getAllHotels);

// Get a single hotel by ID
Router.get('/:id', getOneHotel);

// Delete a hotel by ID
Router.delete('/delete/:id', deleteHotel);

module.exports = Router;
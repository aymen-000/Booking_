const express = require('express');
const { getAllRooms, getOneRoom, createRoom, updateRoom, deleteRoom } = require('../controllers/rooms.controllers');
const { verifyAdmin } = require('../utils/verifyToken');
const Router = express.Router();

Router.get('/', getAllRooms);

Router.get('/:id', getOneRoom);

Router.post('/:hotelId', verifyAdmin, createRoom);

Router.put('/:id', verifyAdmin, updateRoom);

Router.delete('/:id', verifyAdmin, deleteRoom);

module.exports = Router;
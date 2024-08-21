const { Room } = require('../models/Room');
const { Hotel } = require('../models/Hotel');
const { errorHandler } = require('../utils/errorMiddleware');

const createRoom = async (req, res, next) => {
    try {
        const { hotelId } = req.params;

        // Check if the hotel exists before creating the room
        const hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return next(errorHandler(404, 'Hotel not found'));
        }

        const newRoom = new Room(req.body);
        const savedRoom = await newRoom.save();

        await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });

        res.status(201).json(savedRoom);
    } catch (err) {
        next(errorHandler(500, 'Error when creating a room'));
    }
};

const updateRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedRoom) {
            return next(errorHandler(404, 'Room not found'));
        }

        res.status(200).json(updatedRoom); 
    } catch (err) {
        next(errorHandler(500, err.message));
    }
};

const getOneRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);

        if (!room) {
            return next(errorHandler(404, 'Room not found'));
        }

        res.status(200).json(room);
    } catch (err) {
        next(errorHandler(500, err.message));
    }
};

const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find({});
        res.status(200).json(rooms);
    } catch (err) {
        next(errorHandler(500, err.message));
    }
};

const deleteRoom = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedRoom = await Hotel.findByIdAndDelete(id);

        if (!deletedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (err) {
        next(errorHandler(500, err.message));
    }
};

module.exports = {
    createRoom,
    updateRoom,
    getOneRoom,
    getAllRooms,
    deleteRoom
};
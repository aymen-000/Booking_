const express = require('express');
const { Hotel } = require('../models/Hotel'); 
const { errorHandler } = require('../utils/errorMiddleware'); 

const createHotel = async (req, res, next) => {
    try {
        const { rooms, name, city, type, cheapestPrice, rating, features, photos, address , desc } = req.body;

        // Create a new hotel instance with an object
        const hotel = new Hotel({
            rooms,
            name,
            city,
            type,
            cheapestPrice,
            rating,
            features,
            photos,
            address , 
            desc
        });

        // Save the hotel to the database
        const savedHotel = await hotel.save();
        res.status(201).json(savedHotel); // Use 201 for resource creation
    } catch (error) {
        console.log(error.message);
        next(errorHandler(500, error)); 
    }
};

const deleteHotel = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedHotel = await Hotel.findByIdAndDelete(id);

        if (!deletedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (err) {
        next(errorHandler(500, err));
    }
};

const updateHotel = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.status(200).json(updatedHotel); 
    } catch (err) {
        next(errorHandler(500, err));
    }
};

const getOneHotel = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hotel = await Hotel.findById(id);

        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.status(200).json(hotel);
    } catch (err) {
        next(errorHandler(500, err));
    }
};

const getAllHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find({});
        res.status(200).json(hotels);
    } catch (err) {
        next(errorHandler(500, err));
    }
};

module.exports = {
    createHotel,
    deleteHotel,
    updateHotel,
    getOneHotel,
    getAllHotels
};
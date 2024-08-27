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
        const query = {};

        // Example: Using $or to match either city or address
        if (req.query.place) {
            const place = req.query.place.toLowerCase();
            query.$or = [
                { city: { $regex: place, $options: 'i' } },
                { address: { $regex: place, $options: 'i' } }
            ];
        }

        // Handle minimum rating
        if (req.query.minRating) {
            const rating = req.query.minRating.toLowerCase();
            if (rating === 'good') {
                query.rating = { $gte: 4.5 };
            } else if (rating === 'average') {
                query.rating = { $gte: 2.5, $lt: 4.5 };
            } else if (rating === 'poor') {
                query.rating = { $lt: 2.5 };
            }
        }

        // Handle price classification
        if (req.query.price) {
            if (req.query.price === 'low') {
                query.cheapestPrice = { $lt: 150 };
            } else if (req.query.price === 'high') {
                query.cheapestPrice = { $gte: 150 };
            }
        }

        // Handle room count filtering by array length
        if (req.query.room) {
            query.$expr = { $eq: [{ $size: "$rooms" }, parseInt(req.query.room, 10)] };
        }

        // Fetch hotels based on the constructed query
        const hotels = await Hotel.find(query);

        // Send the filtered results
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
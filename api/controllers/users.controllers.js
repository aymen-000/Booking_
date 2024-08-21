const express = require('express');
const { User } = require('../models/User');
const { errorHandler } = require('../utils/errorMiddleware');

// Delete a user
const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        next(errorHandler(500, err));
    }
};

// Update a user
const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser); 
    } catch (err) {
        next(errorHandler(500, err));
    }
};

// Get one user by ID
const getOneUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        next(errorHandler(500, err));
    }
};

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        next(errorHandler(500, err));
    }
};

module.exports = {
    deleteUser,
    updateUser,
    getOneUser,
    getAllUsers
};
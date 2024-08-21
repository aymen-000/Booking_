const { User } = require('../models/User');
const { errorHandler } = require('../utils/errorMiddleware');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const dotenv = require('dotenv')
dotenv.config()
// Registration function
const Register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ username, email, password: hashPassword });
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (err) {
        next(errorHandler(500, err.message));
    }
};


const Login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return next(errorHandler(404, "User not found"));
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return next(errorHandler(401, "Invalid password"));
        }
        const token = jwt.sign({id:user._id , isAdmin:user.isAdmin} , process.env.JWT_KEY)
        // Convert user document to a plain JavaScript object
        const { password: hashedPassword, isAdmin, ...other } = user.toObject();
        
        // If the login is successful, return the user info
        res.cookie("token" , token , {httpOnly : true}).status(200).json({ message: "Login successful", ...other });
    } catch (err) {
        next(errorHandler(500, err.message));
    }
};

module.exports = { Register , Login};

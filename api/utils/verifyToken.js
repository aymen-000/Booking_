const jwt = require('jsonwebtoken');
const { errorHandler } = require('./errorMiddleware');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return next(errorHandler(401, "No token!"));
    }
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) {
            return next(errorHandler(403, "Token invalid!"));
        }
        req.user = user; // Set the user information on the req object
        next(); // Proceed to the next middleware or route handler
    });
};

const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            next(errorHandler(403, "Unauthorized!"));
        }
    });
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => { 
        if (req.user.isAdmin) {
            next();
        } else {
            next(errorHandler(403, "Unauthorized, you are not admin!"));
        }
    });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
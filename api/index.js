const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const roomsRouter = require('./routes/rooms');
const hotelsRouter = require('./routes/hotels');

dotenv.config();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/hotels", hotelsRouter);

app.get('/api/profile', (req, res ) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_KEY, {}, (err, user) => {
        if (err) {
            console.error("Token verification failed:", err);
            return res.status(401).json({ error: "Unauthorized" });
        }
        console.log("User verified:", user);
        res.json(user);
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

// Database connection
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected to the database');
        // Start the server only after successfully connecting to the database
        app.listen(8800, () => {
            console.log('Server is running on port 8800');
        });
    })
    .catch((err) => {
        console.error('Error occurred during the connection to the database:', err);
    });
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const roomsRouter = require('./routes/rooms')
const hotelsRouter = require('./routes/hotels')
dotenv.config();
// midelwares 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser());
app.use("/api/auth" , authRouter)
app.use("/api/users" , usersRouter)
app.use("/api/rooms" , roomsRouter)
app.use("/api/hotels" , hotelsRouter)
app.use((err , req , res , next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error" ; 
    res.status(statusCode).json({
        sucess : false  , 
        statusCode , 
        message
    })
})
// Database connection
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('connected to the database');
        // Start the server only after successfully connecting to the database
        app.listen(8800, () => {
            console.log('Server is running on port 8800');
        });
    })
    .catch((err) => {
        console.error('Error occurred during the connection to the database:', err);
    });

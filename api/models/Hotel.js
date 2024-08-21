const mongoose = require('mongoose');
const { Schema } = mongoose;

const HotelSchema = new Schema({
    city: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    rooms: {
        type: [String], 
        required: true
    },
    photos: {
        type: [String], 
        required: true
    },
    features: {
        type: Boolean, 
        default: false
    },
    rating: {
        type: Number, 
        min: 0, 
        max: 5, 
        default: 0
    },
    cheapestPrice: {
        type: Number, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    type: {
        type: String, 
        required: true
    } , 
    desc : {
        type : String , 
        required : true 
    }
}, {
    timestamps: true 
});

Hotel = mongoose.model('Hotel', HotelSchema);
module.exports = {Hotel}

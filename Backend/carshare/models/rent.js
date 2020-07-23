/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of rent model
*/

const mongoose = require('mongoose');

const rent = mongoose.Schema({
    car_id:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    user_id:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    location_id:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    period: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        Default: false
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Rent', rent);
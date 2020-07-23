/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of location model
*/

const mongoose = require('mongoose');

const location = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Location', location);
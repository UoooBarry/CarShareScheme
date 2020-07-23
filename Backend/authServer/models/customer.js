/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of customer model
*/

const mongoose = require('mongoose');

//scheme
const loginScheme = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const customer = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    family_name:{
        type: String,
        required: true
    },
    date_of_birth:{
        type: Date
    },
    contact:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    login: loginScheme
})

module.exports = mongoose.model('Customer', customer);
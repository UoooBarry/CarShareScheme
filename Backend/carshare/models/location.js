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
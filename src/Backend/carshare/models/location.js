/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of location model
*/

const Sequelize = require('sequelize');
const db = require('../config/db');

const location = db.define('locations',{
    name:{
        type: Sequelize.STRING
    },
    address:{
        type: Sequelize.STRING
    }
})


module.exports = location;
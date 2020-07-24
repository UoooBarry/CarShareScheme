/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of customer model
*/


const Sequelize = require('sequelize');
const db = require('../config/database');

const customer = db.define('customers',{
    first_name:{
        type: Sequelize.STRING
    },
    family_name:{
        type: Sequelize.STRING
    },
    date_of_birth:{
        type: Sequelize.DATE
    },
    contact:{
        type: Sequelize.INTEGER
    },
    gender:{
        type: Sequelize.STRING
    }
})

module.exports = customer;
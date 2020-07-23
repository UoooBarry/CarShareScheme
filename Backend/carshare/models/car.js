/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of car model
             Yongqian Huang, 23/07/2020, Migration to postgresql database
*/

const Sequelize = require('sequelize');
const db = require('../config/db');

const car = db.define('cars',{
    name:{
        type: Sequelize.STRING
    },
    brand:{
        type: Sequelize.STRING
    },
    model:{
        type: Sequelize.STRING
    },
    purchase_date:{
        type: Sequelize.DATE
    },
    location_id:{
        type: Sequelize.INTEGER
    },
    available:{
        type: Sequelize.BOOLEAN
    }
});

module.exports = car;
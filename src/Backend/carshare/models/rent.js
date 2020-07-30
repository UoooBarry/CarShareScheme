/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of rent model
             Yongqian Huang, 30/07/2020, Create bill model
*/

const Sequelize = require('sequelize');
const Location = require('./location');
const Car = require('./car');
const Bill = require('./bill');
const db = require('../config/db');

const rent =  db.define('rents',{
    car_id:{
        type: Sequelize.INTEGER
    },
    user_id:{
        type: Sequelize.INTEGER
    },
    location_id:{
        type: Sequelize.INTEGER
    },
    period: {
        type: Sequelize.INTEGER
    },
    bill_id:{
        type: Sequelize.INTEGER
    },
    completed: {
        type: Sequelize.BOOLEAN
    }
})

rent.hasOne(Bill,{foreignKey: 'bill_id'});
rent.hasOne(Location, {foreignKey: 'location_id'});
rent.hasOne(Car, {foreignKey: 'car_id'});

module.exports = rent;
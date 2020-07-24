/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of rent model
*/

const Sequelize = require('sequelize');
const Location = require('./location');
const Car = require('./car');
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
    completed: {
        type: Sequelize.BOOLEAN
    }
})

rent.belongsTo(Location, {foreignKey: 'location_id'});
rent.belongsTo(Car, {foreignKey: 'car_id'});

module.exports = rent;
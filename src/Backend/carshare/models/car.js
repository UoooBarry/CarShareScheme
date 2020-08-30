
/****************************************************************
 *       @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020        *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF CAR MODEL  *
 * YONGQIAN HUANG, 23/07/2020, MIGRATION TO POSTGRESQL DATABASE *
 ****************************************************************/
             


const Sequelize = require('sequelize');
const Location = require('./location');
const db = require('../config/db');


const car = db.define('cars', {
    name: {
        type: Sequelize.STRING
    },
    brand: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    },
    purchase_date: {
        type: 'DATE',
        defaultValue: new Date()
    },
    location_id: {
        type: Sequelize.INTEGER
    },
    seats:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    luggages:{
        type: Sequelize.INTEGER,
        defaultValue: 3
    },
    description:{
        type: Sequelize.TEXT
    },
    addons:{
        type: Sequelize.STRING,
        allowNull: false
    },
    viewed:{
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

car.belongsTo(Location, {
    foreignKey: 'location_id'
});


module.exports = car;
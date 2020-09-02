 
/****************************************************************
 *       @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020        *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF RENT MODEL *
 *        YONGQIAN HUANG, 30/07/2020, CREATE BILL MODEL         *
 ****************************************************************/


const Sequelize = require('sequelize');
const Location = require('./location');
const Car = require('./car');
const Bill = require('./bill');
const db = require('../config/db');
const Customer = require('../models/customer');

const rent = db.define('rents', {
    car_id: {
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    location_id: {
        type: Sequelize.INTEGER
    },
    period: {
        type: Sequelize.INTEGER
    },
    bill_id: {
        type: Sequelize.INTEGER
    },
    completed: {
        type: Sequelize.BOOLEAN
    }
})

rent.belongsTo(Bill, {
    foreignKey: 'car_id'
});
rent.belongsTo(Location, {
    foreignKey: 'location_id'
});
rent.belongsTo(Car, {
    foreignKey: 'car_id'
});
rent.belongsTo(Customer, {
    foreignKey: 'user_id'
});

module.exports = rent;
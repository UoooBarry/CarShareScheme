 
/****************************************************************
 *       @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020        *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF RENT MODEL *
 *        YONGQIAN HUANG, 30/07/2020, CREATE BILL MODEL         *
 ****************************************************************/


const Sequelize = require('sequelize');
const Car = require('./car');
const Bill = require('./bill');
const db = require('../config/db');
const Customer = require('../models/customer');

const rent = db.define('rents', {
    car_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bill_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    period: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

Bill.hasOne(rent,{
    foreignKey: 'bill_id'
})

rent.belongsTo(Bill, {
    foreignKey: 'bill_id'
})
rent.belongsTo(Car, {
    foreignKey: 'car_id'
});
rent.belongsTo(Customer, {
    foreignKey: 'user_id'
});

module.exports = rent;
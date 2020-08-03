const Sequelize = require('sequelize');
const db = require('../config/db');

const bill = db.define('bills', {
    fee: {
        type: Sequelize.DOUBLE
    }
});


module.exports = bill;
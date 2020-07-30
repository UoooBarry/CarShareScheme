const Sequelize = require('sequelize');
const db = require('../config/db');

const bill =  db.define('rents',{
    id:{
        type: Sequelize.INTEGER
    },
    fee:{
        type: Sequelize.DOUBLE
    }
});


module.exports = bill;
const Sequelize = require('sequelize');

const bill =  db.define('rents',{
    id:{
        type: Sequelize.INTEGER
    },
    fee:{
        type: Sequelize.DOUBLE
    }
});


module.exports = bill;
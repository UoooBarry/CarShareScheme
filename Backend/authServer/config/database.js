/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation to connect local database
*/


const mongoose = require('mongoose');

const DBHOST = process.env.DBHOST || 'localhost';
const DBPORT = process.env.DBPORT || '27017';
const DBNAME = process.env.DBNAME || 'carshare';

const url = `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});

let db = mongoose.connection;

db.on('error', function(err){
    console.log(err);
});

module.exports = db;
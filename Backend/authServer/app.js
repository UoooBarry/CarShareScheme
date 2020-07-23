/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Npm Init
*/


require('dotenv').config();
const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
const mongo = require('./config/database');
const Customer = require('./models/customer');
const { check, validationResult } = require('express-validator');
const cors = require('cors')
const passwordHash = require('password-hash');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//catch database connection
mongo.once('open',function(){
    console.log("Database connected successfully.");
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json(err);
  });

app.listen(4000, ()=> console.log("Auth sever is running on port 4000"))
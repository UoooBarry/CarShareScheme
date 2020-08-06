/************************************************************************
*           @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020            *
*         @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION          *
*              YONGQIAN HUANG, 24/07/2020, SEED DATABASE               *
*              YONGQIAN HUANG, 26/07/2020, SYNC DATABASE               *
* YONGQIAN HUANG, 03/08/2020, MAKE AUTO MIGRATION AND SEED TO DATABASE *
************************************************************************/


var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const carsRouter = require('./routes/cars');
const customerRouter = require('./routes/customers');

// Database
const db = require('./config/db');
const seed = require('./data/seed');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use('/api/cars', carsRouter);
app.use('/api/customers', customerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//catch database connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(`DB err: ${err}`))


seed.sync()
  .then(() => {
    seed.up().then(() => {
      console.log('Database seeded.');
    })
  })


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(403);
});

module.exports = app;
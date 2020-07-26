/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Init creation
             Yongqian Huang, 24/07/2020, Seed database
*/

var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const carsRouter = require('./routes/cars');

// Database
const db =require('./config/db');
const Car = require('./models/car');
const Location = require('./models/location');
const seed = require('./data/seed');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/cars', carsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//catch database connection
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch( err => console.log(`DB err: ${err}`))

Location.sync().then( () => {
  const cars = Car.findAll({})
  if(cars.length === 0 && process.env.NODE_ENV != "production"){
    seed.up()
          .then( () => console.log("Database seeded"));
  }
}
);



    
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(403);
});

module.exports = app;

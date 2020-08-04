
/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION *
 *  YONGQIAN HUANG, 23/07/2020, MIGRATE TO POSTGRESQL  *
 *******************************************************/



const express = require('express');
const router = express.Router();
const Car = require('../models/car');

//GET: /api/cars
router.get('/', (req, res) => {
    Car.findAll()
        .then(
            cars => res.json(cars)
        )
        .catch(
            (err) => {
                res.sendStatus(403);
                console.log(err);
            }
        )
});

module.exports = router;
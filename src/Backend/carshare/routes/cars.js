/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Init creation
             Yongqian Huang, 23/07/2020, Migrate to postgresql
*/

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
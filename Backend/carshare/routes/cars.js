/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Init creation
*/

const express = require('express');
const router = express.Router();
const Car = require('../models/car');

//GET: /api/cars
router.get('/', (req,res) => {
    Car.find({})
        .exec()
        .then(
            cars => res.json({cars})
        )
        .catch(() => res.sendStatus(403));
});

module.exports = router;
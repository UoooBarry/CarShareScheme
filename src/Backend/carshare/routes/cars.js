
/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION *
 *  YONGQIAN HUANG, 23/07/2020, MIGRATE TO POSTGRESQL
 *  Yongqian Huang. 17/08/2020, Car listing and description  *
 *******************************************************/



const express = require('express');
const router = express.Router();
const _Car = require('../repository/carRepository');

//GET: /api/cars
router.get('/', (req, res) => {
    _Car.getAll()
        .then(cars => {
            res.json({cars})
        })
        .catch(
            (err) => {
                console.log(err);
                res.sendStatus(403);
            }
        )
});


//GET: /api/cars/:id
router.get('/:id/',(req,res) => {
    _Car.get(req.params.id)
        .then(car => {
            res.json({car})
        })
        .catch( (err) => {
            console.log(err);
            res.sendStatus(403);
        }

        )
})

module.exports = router;
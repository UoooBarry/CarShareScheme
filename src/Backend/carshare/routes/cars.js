
/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION *
 *  YONGQIAN HUANG, 23/07/2020, MIGRATE TO POSTGRESQL  *
 *  Yongqian Huang. 17/08/2020, Car listing and description  
 *  Yongqian Huang. 19/08/2020, Car creating endpoint  *
 *******************************************************/



const express = require('express');
const router = express.Router();
const _Car = require('../repository/carRepository');
const authorize = require('../helpers/authorizationHelper');

//GET: /api/cars
router.get('/', (req, res) => {
    _Car.getAll(req.query.sort, req.query.order)
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

//POST: /api/cars/create
router.post('/create', authorize.verifyToken, (req,res) => {
    if(!req.user.admin) res.sendStatus(403);

    const car = {
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        purchase_date: req.body.purchase_date,
        location_id: req.body.location_id,
        seats: req.body.seats,
        price: req.body.price,
        air_condition: req.body.air_condition,
        luggages: req.body.luggages,
        description: req.body.description
    }

    _Car.create(car)
        .then(() => {
            res.json({
                message: 'success'
            })
        })
        .catch((err) => {
            res.json({
                message: 'fail',
                err
            })
        });
})

module.exports = router;
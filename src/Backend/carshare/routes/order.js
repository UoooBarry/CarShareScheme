/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 *
 *************************************************/

const express = require("express");
const router = express.Router();
const {verifyToken} = require("../helpers/authorizationHelper");
const _Rent = require('../repository/rentRepository');
const _Bill = require('../repository/billRepository');
const _Car = require('../repository/carRepository');
const { orderValidator, validateResult } = require("../helpers/validator");

//POST: api/orders/create
router.post('/create', [orderValidator, verifyToken], async (req, res) => {

    try {
        await validateResult(req);
        const car = await _Car.get(req.body.car_id);
        if(!car.available) throw 'The car does not available yet';

        const feeToPay = req.body.period * car.price;
        //Create bill
        const bill = await _Bill.create({
            fee: feeToPay
        })

        //Create rent
        const rent = await _Rent.create({
            car_id: req.body.car_id,
            user_id: req.user.id,
            period: req.body.period,
            bill_id: bill.id
        });

        res.json({ bill, rent });
    } catch (err) {
        console.log(err);
        res.json({
            message: "fail",
            err,
        });
    }
});


//GET: api/orders/:id/
router.post('/:id/', [verifyToken], (req,res) => {

})

router.post('/pay', [verifyToken], async (req,res) => {

})

module.exports = router;
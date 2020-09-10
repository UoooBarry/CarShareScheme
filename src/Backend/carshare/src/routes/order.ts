/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 *         Yongqian Huang, 05/09/2020, Implement payment *
 *************************************************/

import express,{Request, Response} from 'express';
const router = express.Router();
import {verifyToken} from '../helpers/authorizationHelper';
import {BillType} from '../models/bill'
import _Rent from '../repository/rentReponsitory';
import _Bill from '../repository/billRepository';
import _Car from '../repository/carRepository';
import OrderValidator from '../validators/OrderValidator';
import PaymentValidator from '../validators/PaymentValidator';
import billRepository from '../repository/billRepository';

//POST: api/orders/create
router.post('/create', [OrderValidator.validate, verifyToken], async (req: Request, res: Response) => {

    const validationErrors = req.validationError;
    if(validationErrors && validationErrors.length > 0){
        res.json({
          message: "fail",
          errors: validationErrors,
        });
      }else{
        try {
            const car = await _Car.get(req.body.car_id);
            if(!car.available) throw 'The car does not available yet';
    
            const feeToPay = (req.body.period * car.price).toFixed(2);

            //Create bill
            const bill = await _Bill.create({
                user_id: req.user.id,
                fee: feeToPay,
                type: BillType.RentFee
            })
    
            //Create rent
            const rent = await _Rent.create({
                car_id: req.body.car_id,
                user_id: req.user.id,
                start_from: req.body.start_from,
                period: req.body.period,
                bill_id: bill.id
            });
    
            res.json({ bill, rent });
        }catch(err){
            res.json({
                message: "fail",
                errors: err,
            });
        }
      }
});


// //GET: api/orders/:id/
// router.post('/:id/', [verifyToken], (req: Request, res: Response) => {

// })


// GET: /api/cars/
// Get all orders of the current user
router.get('/',[verifyToken], (req: Request, res: Response) => {
    _Rent.getByUserId(req.user.id) 
            .then((rents) => {
                res.json({
                    rents
                });
            })
            .catch((err) => {
                res.json({
                    message: "fail",
                    errors: err,
                });
            })
});

router.post('/pay', [PaymentValidator.validate, verifyToken], async (req: Request, res: Response) => {
    const validationErrors = req.validationError;
    if(req.bill?.user_id != req.user.id) res.sendStatus(403);
    if(validationErrors && validationErrors.length > 0){
        res.json({
          message: "fail",
          errors: {validationErrors},
        });
      }else{
        try{
            //If pass payment validator
            
            //Update bill status
            await _Bill.pay(req.bill);

            res.json({
                message: "success"
            })
        }catch(err){
            res.json({
                message: "fail",
                errors: {err},
            });
        }
    }
})

export default router;
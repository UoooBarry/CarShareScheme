/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 *         Yongqian Huang, 05/09/2020, Implement payment
 *         Yongqian Huang, 11/09/2020, Send receipt message *
 *************************************************/

import express,{Request, Response} from 'express';
const router = express.Router();
import {verifyToken} from '../helpers/authorizationHelper';
import { BillType } from '../models/bill';
import _Rent from '../repository/rentRepository';
import _Bill from '../repository/billRepository';
import _Car from '../repository/carRepository';
import OrderValidator from '../validators/OrderValidator';
import PaymentValidator from '../validators/PaymentValidator';
import Message from '../helpers/messageHelper';
import ItemNotFound from '../exceptions/ItemNotFound';

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
    
            const feeToPay = (req.body.period*car.price + car.price*0.1).toFixed(2);

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
        } catch (err) {
            console.log(err);
            res.json({
                message: "fail",
                errors: err,
            });
        }
      }
});


router.post('/extend', [verifyToken], async (req: Request, res: Response) => {

    try {
        let originalRent = await _Rent.get(req.body.rent_id);
        if (!originalRent) throw new ItemNotFound('Rent not found');
        const feeToPay = (req.body.period*originalRent.car.price + originalRent.car.price*0.1).toFixed(2);

        //Create bill
        const bill = await _Bill.create({
            user_id: req.user.id,
            fee: feeToPay,
            type: BillType.RentFee
        });

        
        originalRent.start_from = originalRent.start_from + req.body.period;
        originalRent.bill_id = bill.id;
        //Create rent
        const newRent = await _Rent.create(originalRent);

        res.json({ bill, newRent });
    }catch (err) {
        res.sendStatus(404);
    }
   
})


//GET: api/orders/:id/
router.get('/:id/', [verifyToken], (req: Request, res: Response) => {
    _Rent.get(parseInt(req.params.id))
            .then((rent) => {
                if(rent?.user_id != req.user.id) throw 'Not correct user';
                res.json({rent});
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(404);
            })
})


// GET: /api/orders/personal
// Get all orders of the current user
router.get('/list/personal',[verifyToken], (req: Request, res: Response) => {
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

// GET: /api/cars/
// Get all orders for admin
router.get('/', [verifyToken], (req: Request, res: Response) => {
    if(!req.user.admin) res.sendStatus(403);
    _Rent.getAll()
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
})

//PATCH: /api/cars/return
router.patch('/return', [verifyToken], (req: Request, res: Response) => {
    if(!req.user.admin) res.sendStatus(403);
    _Rent.return(req.body.rent_id, req.body.location_id)
        .then(() => {

                //Send message to user only in production environment
                if (process.env.NODE_ENV == 'production') {
                    const text: string = `Thanks for order our rent services. Your rent id: ${req.body.rent_id}, is successfully returned. Thank you for using our service!.`;
                    Message.sendMessage(req.user.contact_number, text);
                }
            
                res.json({
                    message: 'success'
                });
            })
            .catch((err) => {
                res.json({
                    message: "fail",
                    errors: err,
                });
                console.log(err);
            })
})

//PATCH: /api/cars/pickup
router.patch('/pickup', [verifyToken], (req: Request, res: Response) => {
    if(!req.user.admin) res.sendStatus(403);
    _Rent.pickUp(req.body.rent_id)
        .then(() => {

                //Send message to user only in production environment
                if (process.env.NODE_ENV == 'production') {
                    const text: string = `Thanks for order our rent services. Your rent id: ${req.body.rent_id}, is successfully picked up. Thank you for using our service!.`;
                    Message.sendMessage(req.user.contact_number, text);
                }
            
                res.json({
                    message: 'success'
                });
            })
            .catch((err) => {
                res.json({
                    message: "fail",
                    errors: err,
                });
                console.log(err);
            })
})

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
            if(!req.bill) throw 'Not fond';
            await _Bill.pay(req.bill);

            //Send message to user only in production environment
            if (process.env.NODE_ENV == 'production') {
                const text: string = `Thanks for order our rent services. Your rent id: ${req.bill?.id} will start at ${req.bill?.rent.start_from}. You will soon receive a detail receipt in your email. `;
                Message.sendMessage(req.user.contact_number, text);
            }
            
            await _Car.deactivate(req.bill.rent.car.id);

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
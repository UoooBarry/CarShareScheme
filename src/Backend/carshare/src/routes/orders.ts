/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 *         Yongqian Huang, 05/09/2020, Implement payment
 *         Yongqian Huang, 11/09/2020, Send receipt message
 *         Yongqian Huang, 22/09/2020, Extend rent and custom error *
 *         Yongqian Huang, 22/09/2020, Add validation of licenses *
 * Yongqian Huang, 29/09/2020, Apply factor pattern
 *************************************************/

import express,{Request, Response} from 'express';
const router = express.Router();
import {verifyToken} from '../helpers/authorizationHelper';
import { BillType } from '../models/bill';
import _Rent from '../repository/rentRepository';
import _Bill from '../repository/billRepository';
import _Car from '../repository/carRepository';
import _License from '../repository/licenseRepository';
import validatorFactory from '../helpers/validatorFactory';
const OrderValidator = validatorFactory.getValidator('order');
const PaymentValidator = validatorFactory.getValidator('payment');
const ExtendRentValidator = validatorFactory.getValidator('extend');
import Message from '../helpers/messageHelper';
import ItemNotFound from '../exceptions/ItemNotFound';
import IncorrectItem from '../exceptions/IncorrectItem';
import { RentStatus } from '../models/rent';


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
            const license = await _License.getByUserId(req.user.id);
            if (!license || !license.isValidated) throw new IncorrectItem('Your account is not validate yet, please go to license validation page.');
            if(!car.available) throw new IncorrectItem('The car does not available yet');
    
            const feeToPay = (req.body.period * car.price + car.price * 0.1).toFixed(2);
            
            
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
    
            res.json({ bill, rent, feeToPay });
        } catch (err) {
            res.json({
                message: "fail",
                errors: err.message,
            });
        }
      }
});

//GET: api/orders/extend/:id
router.post('/extend/:id', [ExtendRentValidator.validate, verifyToken], async (req: Request, res: Response) => {
    const validationErrors = req.validationError;
    if (validationErrors && validationErrors.length > 0) {
        res.json({
            message: "fail",
            errors: validationErrors,
        });
    } else {
        try {
            if (!req.originalRent) throw new ItemNotFound('Rent not found');
            const feeToPay = (req.body.period * req.originalRent.car.price).toFixed(2);
            //If pass payment validator
            if (req.body.payment_total !== feeToPay) throw new IncorrectItem('Payment amount incorrect');
            
            //Update to complete
            await _Rent.update(parseInt(req.params.id), { status: RentStatus.Extended });
            
            //Create bill
            const bill = await _Bill.create({
                user_id: req.user.id,
                fee: feeToPay,
                isPaid: true,
                type: BillType.RentFee
            });
            
            const newPeriod: number = req.originalRent.period + parseInt(req.body.period);  //old period + new period = new period
            //Create rent
            const newRent = await _Rent.create({
                car_id: req.originalRent.car.id,
                user_id: req.user.id,
                start_from: req.originalRent.start_from, //Use the original start from date
                period: newPeriod,
                bill_id: bill.id,
                status: RentStatus.InProgress
            });


            res.json({ bill, newRent });

        } catch (err) {
            console.log(err);
            res.sendStatus(404);
        }
    }
})


//GET: api/orders/:id/
router.get('/:id/', [verifyToken], (req: Request, res: Response) => {
    _Rent.get(parseInt(req.params.id))
            .then((rent) => {
                if(rent?.user_id != req.user.id) throw new IncorrectItem('Incorrect user');
                res.json({rent});
            })
            .catch((err) => {
                res.sendStatus(404);
            })
})

//Delete: /api/orders/:id
router.delete('/:id/', [verifyToken], (req: Request, res: Response) => {
    if(!req.user.admin) res.sendStatus(403);
    _Rent.delete(parseInt(req.params.id))
            .then(() => {
                res.json({message: 'success'});
            })
            .catch((err) => {
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
          errors: validationErrors,
        });
      }else{
        try{
            //If pass payment validator
            
            //Update bill status
            if(!req.bill) throw new ItemNotFound('Bill not found');
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
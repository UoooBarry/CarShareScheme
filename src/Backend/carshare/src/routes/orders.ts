/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 *         Yongqian Huang, 05/09/2020, Implement payment
 *         Yongqian Huang, 11/09/2020, Send receipt message
 *         Yongqian Huang, 22/09/2020, Extend rent and custom error *
 *         Yongqian Huang, 22/09/2020, Add validation of licenses *
 * Yongqian Huang, 29/09/2020, Apply factor pattern
 * Yongqian Huang, 14/10/2020, Fix car status not update
 *************************************************/

import express, { Request, Response } from 'express';
const router = express.Router();
import { verifyToken } from '../helpers/authorizationHelper';
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
import AccountUnavailable from '../exceptions/AccountUnavailable';


//POST: api/orders/create
router.post('/create', [OrderValidator.validate, verifyToken], async (req: Request, res: Response) => {

    const validationErrors = req.validationError;
    if (validationErrors && validationErrors.length > 0) {
        res.json({
            message: "fail",
            errors: validationErrors,
        });
    } else {
        try {
            const pendingRents = await _Rent.getUserPendingRents(req.user.id); //Get not picked and in progress rent of the user.
            if (pendingRents.length > 0) throw new AccountUnavailable("Your account already had one pending rent"); //Cannot have exsited rent
            const license = await _License.getByUserId(req.user.id);
            if (!license || !license.isValidated) throw new AccountUnavailable('Your account is not validate yet, please go to license validation page. Redirecting...');

            if (!req.car) throw new ItemNotFound('Incorrect request car');
            const feeToPay = (req.body.period * req.car.price + req.car.price * 0.1).toFixed(2);




            //Create rent
            const rent = await _Rent.create({
                car_id: req.body.car_id,
                user_id: req.user.id,
                start_from: req.body.start_from,
                period: req.body.period,
            });

            //Create bill
            const bill = await _Bill.create({
                user_id: req.user.id,
                fee: feeToPay,
                type: BillType.RentFee,
                rent_id: rent.id
            })
            
            if (req.body.start_from <= new Date()) { //if the order is start today today
                await rent.car.update({
                    available: false
                })
            }

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
            res.sendStatus(400);//return bad request
        }
    }
})


//GET: api/orders/:id/
router.get('/:id/', [verifyToken], (req: Request, res: Response) => {
    _Rent.get(parseInt(req.params.id))
        .then((rent) => {
            if (rent?.user_id != req.user.id) throw new IncorrectItem('Incorrect user');
            res.json({ rent });
        })
        .catch((err) => {
            res.sendStatus(404);
        })
})

//Delete: /api/orders/:id
router.delete('/:id/', [verifyToken], (req: Request, res: Response) => {
    if (!req.user.admin) res.sendStatus(403);
    _Rent.delete(parseInt(req.params.id))
        .then(() => {
            res.json({ message: 'success' });
        })
        .catch((err) => {
            console.log(err)
            res.sendStatus(400);
        })
})


// GET: /api/orders/personal
// Get all orders of the current user
router.get('/list/personal', [verifyToken], (req: Request, res: Response) => {
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
    if (!req.user.admin) res.sendStatus(403);
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
    if (!req.user.admin) res.sendStatus(403);
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
        })
})

//PATCH: /api/cars/pickup
router.patch('/pickup', [verifyToken], (req: Request, res: Response) => {
    if (!req.user.admin) res.sendStatus(403);
    _Rent.pickUp(req.body.rent_id)
        .then(() => {

            //Send message to user only in production environment
            if (process.env.NODE_ENV == 'production') {
                const text: string = `Thanks for order our car rent service. \nYou order ${req.bill?.rent.id} is successfully picked up!`;
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
    if (req.bill?.user_id != req.user.id) res.sendStatus(403);
    if (validationErrors && validationErrors.length > 0) {
        res.json({
            message: "fail",
            errors: validationErrors,
        });
    } else {
        try {
            //If pass payment validator

            //Update bill status
            if (!req.bill || req.bill.isPaid) throw new ItemNotFound('Bill not found'); //detect is the bill is already being paid, not resending message
            await _Bill.pay(req.bill);

            if (req.body.type === 'rent') { //If the type of payment is for rent
                //Send message to user only in production environment
                if (process.env.NODE_ENV == 'production') {
                    const text: string = `Thanks for order our car rent service. \nYou can check your receipt here: https://carshare.uooobarry.com/receipt/${req.bill?.rent.id} \n Please note that your rent will start at ${req.bill?.rent.start_from} . You should come to pick up location 30 mins in advanced.`;
                    Message.sendMessage(req.user.contact_number, text);
                }

                if (req.bill.rent.start_from <= new Date()) { //if the order is start today today
                    await _Car.deactivate(req.bill.rent.car.id);
                }
                
            }

            res.json({
                message: "success"
            })
        } catch (err) {
            res.json({
                message: "fail",
                errors: err.message,
            });
        }
    }
})

export default router;
/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 *
 *************************************************/

import express,{Request, Response} from 'express';
const router = express.Router();
import {verifyToken} from '../helpers/authorizationHelper';
import _Rent from '../repository/rentReponsitory';
import _Bill from '../repository/billRepository';
import _Car from '../repository/carRepository';
import OrderValidator from '../validators/OrderValidator';

//POST: api/orders/create
router.post('/create', [OrderValidator.validate, verifyToken], async (req: Request, res: Response) => {

    const validationErrors = req.validationError;
    if(validationErrors && validationErrors.length > 0){
        res.json({
          message: "fail",
          validationErrors,
        });
      }else{
        try {
            const car = await _Car.get(req.body.car_id);
            if(!car.available) throw 'The car does not available yet';
    
            const feeToPay = req.body.period * car.price;
            //Create bill
            const bill = await _Bill.create({
                fee: feeToPay
            })
    
            res.json({ bill });
        }catch(err){
            res.json({
                message: "fail",
                err,
            });
        }
      }
});


//GET: api/orders/:id/
router.post('/:id/', [verifyToken], (req: Request, res: Response) => {

})

router.post('/pay', [verifyToken], async (req: Request, res: Response) => {

})

export default router;
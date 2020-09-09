/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 04/09/2020 *
 ************************************************/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';
import _Bill from '../repository/billRepository';

class PaymentValidator implements Validator{
    validationError: string[];

    constructor(){
        this.validationError = [];
    }

    async validate(req: Request, res: Response, next: NextFunction){
        req.validationError = [];
        if(!req.body.bill_id) req.validationError.push('Unable to find the bill');
        const bill = await _Bill.get(req.body.bill_id);
        if(!bill)  req.validationError.push('Unable to find the bill');
        if(req.body.total != bill.fee) req.validationError.push('Payment amount unmatched');

        req.bill = bill;
        next();
    }
    
}

export default new PaymentValidator();
/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 03/09/2020 *
 ************************************************/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';

class OrderValidator implements Validator{
    validationError: string[];

    constructor(){
        this.validationError = [];
    }

    validate(req: Request, res: Response, next: NextFunction){
       req.validationError = [];
       if(!req.body.car_id) req.validationError.push('Car cannot be empty');
       if(!req.body.period) req.validationError.push('Period cannot be empty');
       if(!req.body.start_from) req.validationError.push('Start from date cannot be empty');
       const startFrom = new Date(req.body.start_from);
       //Get the limit date by +3 days to today
       const limit = new Date();
       limit.setDate(limit.getDate() + 3);
       //if over limit
       if(startFrom > limit){
        req.validationError.push('You can only book cars that within 3 days.');
       }
       next();
    }
    
}

export default new OrderValidator();
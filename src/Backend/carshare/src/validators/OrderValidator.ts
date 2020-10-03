/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 03/09/2020 *
 ************************************************/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';

class OrderValidator implements Validator{

    validate(req: Request, res: Response, next: NextFunction){
       req.validationError = [];
       if(!req.body.car_id) req.validationError.push('Car cannot be empty');
       if(!req.body.period || req.body.period <= 0) req.validationError.push('Period cannot be empty');
       if(!req.body.start_from) req.validationError.push('Start from date cannot be empty');
       next();
    }
    
}

export default new OrderValidator();
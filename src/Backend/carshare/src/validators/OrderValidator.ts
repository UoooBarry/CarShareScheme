/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 03/09/2020 *
 ************************************************/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';
import _Car from '../repository/carRepository';

class OrderValidator implements Validator{

    async validate(req: Request, res: Response, next: NextFunction){
       req.validationError = [];
       const car = await _Car.get(req.body.car_id);
       if(!car.available) req.validationError.push('The car does not available yet');
       if(!req.body.car_id) req.validationError.push('Car cannot be empty');
       if(!req.body.period || req.body.period <= 0) req.validationError.push('Period cannot be empty');
        if (!req.body.start_from) req.validationError.push('Start from date cannot be empty');
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
       if (new Date(req.body.start_from) < yesterday) req.validationError.push('Start from date cannot be pass');
       req.car = car;
       next();
    }
    
}

export default new OrderValidator();
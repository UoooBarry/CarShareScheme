/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 03/09/2020 *
 ************************************************/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';

class CarValidator implements Validator{
    
    validate(req: Request, res: Response, next: NextFunction): void {
        req.validationError = [];
        if(!req.body.name) req.validationError.push('Name cannot be empty');
        if(!req.body.model) req.validationError.push('Model cannot be empty');
        if(!req.body.brand) req.validationError.push('Brand cannot be empty');
        if(!req.body.location_id) req.validationError.push('Location Id cannot be empty');
        if(req.body.seats < 2 || req.body.seats > 9) req.validationError.push('Seats cannot be less than 2 or greater than 9');
        if(!req.body.addons) req.validationError.push('Addons cannot be empty');
        if(!req.body.price) req.validationError.push('Price cannot be empty');
        next();
    }
    
}

export default new CarValidator();
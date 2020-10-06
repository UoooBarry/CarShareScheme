/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 03/09/2020 *
 ************************************************/
import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';

class ProfileValidator implements Validator{

    validate(req: Request, res: Response, next: NextFunction): void {
        req.validationError = [];
        if(!req.body.first_name) req.validationError.push('First name cannot be empty');
        if(!req.body.family_name) req.validationError.push('Family name cannot be empty');
        if(!req.body.contact_number) req.validationError.push('Contact number cannot be empty');
        if(req.body.contact_number > 999999999 || req.body.contact_number< 400000000) req.validationError.push('Contact must be numbers start with 4 and has 9 digits');
        next();
    }
}

export default new ProfileValidator();
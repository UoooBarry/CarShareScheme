/******************************************
 * @AUTHOR YONGQIAN CREATED AT 04/09/2020 *
 ******************************************/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';

class MobileValidator implements Validator{
    validationError: string[];

    constructor(){
        this.validationError = [];
    }

    validate(req: Request, res: Response, next: NextFunction): void {
        req.validationError = [];
        if(!req.query.contact_number) req.validationError.push('Contact number cannot be empty');
        if(parseInt(<any>req.query.contact_number) > 999999999 || parseInt(<any>req.query.contact_number) < 400000000) req.validationError.push('Contact must be numbers start with 4 and has 9 digits');
        next();
    }
}

export default new MobileValidator;
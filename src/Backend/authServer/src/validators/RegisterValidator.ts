/******************************************
 * @AUTHOR YONGQIAN CREATED AT 04/09/2020 *
 ******************************************/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';
import _Login from '../repository/loginRepository'

class RegisterValidator implements Validator{
    validationError: string[];

    constructor(){
        this.validationError = [];
    }

    async validate(req: Request, res: Response, next: NextFunction): Promise<void> {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const existed = await _Login.getByEmail(req.body.email);
        req.validationError = [];
        if(!req.body.email) req.validationError.push('Email cannot be empty');
        if(!regex.test(req.body.email)) req.validationError.push("Email format unmatched");
        if(existed !== null) req.validationError.push("Email already exists");
        if(req.body.password.length < 6) req.validationError.push("Password should at least 6 digits long");
        if(!req.body.first_name) req.validationError.push('FirstName cannot be empty');
        if(!req.body.family_name) req.validationError.push('FamilyName cannot be empty');
        if(!req.body.code) req.validationError.push('Please enter your SMS validation code');
        next();
    }
    
}

export default new RegisterValidator();
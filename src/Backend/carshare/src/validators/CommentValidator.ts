/*
    @Author Yongqian Huang 1/10/2020
*/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';

class CommentValidator implements Validator{
    validationError: string[];

    constructor(){
        this.validationError = [];
    }

    validate(req: Request, res: Response, next: NextFunction): void {
        req.validationError = [];
        if(!req.body.stars) req.validationError.push('Stars cannot be empty');
        if(req.body.stars < 0) req.validationError.push('Stars cannot be less than 0');
        if(!req.body.comment) req.validationError.push('Comment cannot be empty');
        next();
    }
    
}

export default new CommentValidator();
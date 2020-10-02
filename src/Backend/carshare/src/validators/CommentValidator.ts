/*
    @Author Yongqian Huang 1/10/2020
*/

import Validator from './Validator';
import {Request, Response, NextFunction} from 'express';
import _Rent from '../repository/rentRepository'
import ItemNotFound from '../exceptions/ItemNotFound';
import { RentStatus } from '../models/rent';

class CommentValidator implements Validator{
    validationError: string[];

    constructor(){
        this.validationError = [];
    }

    async validate(req: Request, res: Response, next: NextFunction) {
        req.validationError = [];
        if(!req.params.id) req.validationError.push('Car id cannot be empty');
        if(!req.body.rent_id) req.validationError.push('Rent id cannot be empty');
        const rent = await _Rent.get(req.body.rent_id);
        if(!rent){
            throw new ItemNotFound('Unfound rent');
        }
        if(rent.status !== RentStatus.WaitForReview) req.validationError.push('You cannot write review now');
        if(!req.body.stars) req.validationError.push('Stars cannot be empty');
        if(req.body.stars < 0 || req.body.stars > 5) req.validationError.push('Stars number incorrect');
        if(!req.body.comment) req.validationError.push('Comment cannot be empty');
        req.originalRent = rent;
        next();
    }
    
}

export default new CommentValidator();
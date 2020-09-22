/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 22/09/2020 *
 ************************************************/

import Validator from './Validator';
import { Request, Response, NextFunction } from 'express';
import _Rent from '../repository/rentRepository';
import Rent, { RentStatus } from '../models/rent';

class ExtendRentValidator implements Validator{
  validationError: string[];

  constructor(){
      this.validationError = [];
  }

  async validate(req: Request, res: Response, next: NextFunction) {
    req.validationError = [];
    const originalRent = await _Rent.get(parseInt(req.params.id));
    if(!req.body.period || req.body.period <= 0) req.validationError.push('Period be empty');
    if(!req.params.id) req.validationError.push('Rent id cannot be empty');
    if(originalRent?.status === RentStatus.Overdue || originalRent?.status === RentStatus.Completed) req.validationError.push('Rent is not available'); //If the rent is overdue or completed
    req.originalRent = <Rent><unknown>originalRent;
    next();
  }
  
}

export default new ExtendRentValidator();
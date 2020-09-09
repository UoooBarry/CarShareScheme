/**************************
 * @AUTHOR YONGQIAN HUANG *
 **************************/

import {Request, Response, NextFunction} from 'express';
interface Validator{
    validationError: string[];
    validate(req: Request, res:Response, next:NextFunction): void;
}

export default Validator;
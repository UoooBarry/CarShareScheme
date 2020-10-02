/**************************
 * @AUTHOR YONGQIAN HUANG *
 **************************/

import {Request, Response, NextFunction} from 'express';
interface Validator{
    validate(req: Request, res:Response, next:NextFunction): void;
}

export default Validator;
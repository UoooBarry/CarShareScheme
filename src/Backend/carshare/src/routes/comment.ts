/*
    @Author Yongqian Huang 1/10/2020
*/

import CommentValidator from '../validators/CommentValidator';
import express,{Request, Response, NextFunction} from 'express';
import { verifyToken } from '../helpers/authorizationHelper';
const router = express.Router();

router.post('/create', [CommentValidator.validate, verifyToken], (req: Request, res: Response) => {
    const validationErrors = req.validationError;
    if(validationErrors && validationErrors.length > 0){
        res.json({
          message: "fail",
          errors: validationErrors,
        });
      }else{
        
      }
})

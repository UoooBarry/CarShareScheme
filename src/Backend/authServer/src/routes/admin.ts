/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED_AT: 13/08/2020 
 *  Yongqian Huang, 04/09/2020 Migrate to typescript*
 **************************************************/

import path from "path";

require('dotenv').config({path: path.resolve(__dirname, '../../.env')})
import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import _Login from '../repository/loginRepository';
import _Customer from '../repository/customerRepository';
import {verifyToken} from '../helpers/authorizationHelper';

//GET /api/admin/verify return if an token holder is an admin
router.get('/verify', verifyToken, (req: Request,res: Response) => {
  res.json({authorize: req.user.admin});
});

//GET /api/admin/customers, return all customers with activate status
router.get('/customers', (req: Request,res: Response) => {
  _Customer.getAll()
           .then(customers => {
              res.json({
                customers
              })
           })
           .catch((error) => {
            res.json({message: 'fail', reason: error});
        })
});




//PATCH api/admin/activate/:id/
router.patch('/activate/:id/', verifyToken, (req: Request,res: Response) => {
  //If the token holder is not admin, return forbidden
    if(!req.user.admin) res.sendStatus(403);


    _Login.activate(parseInt(req.params.id)) 
            .then( () =>
                res.json({
                  message: 'success'
                })
            )
            .catch((error: any) => {
                res.json({message: 'fail', reason: error})
            })
});


export default router;

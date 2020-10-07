/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 20/08/2020
 * Yongqian Huang, Updated at 03/09/2020 Migrate to typescript *
 *************************************************/

import JWT from 'jsonwebtoken';
import Customer from '../models/customer'
import {Request, Response, NextFunction} from 'express';
import path from "path";

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const generateAccessToken = (customer: Customer) => {
    return JWT.sign({customer}, process.env.ACCESS_TOKEN_SECRET);
}

const verifyToken =  (req: Request, res:Response, next:NextFunction) => {
    const header:any = req.headers['authorization'];
    //Check exsit
   if (typeof header === 'undefined') {
        res.sendStatus(403); //Forbidden
        next();
    } //Forbidden
    let token = header.split(' ')[1];
    JWT.verify(token,process.env.ACCESS_TOKEN_SECRET, (err: any, data: any) => {
        if(err) res.sendStatus(403) 
        // Set the req user
        req.user = data.customer;
        // Next
        next();
    });
}

export {generateAccessToken, verifyToken}
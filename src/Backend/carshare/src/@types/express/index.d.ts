/* 
    Author: Yongqian Huang, created at: 04/09/2020
*/
import Bill from '../../models/bill'
import Car from '../../models/car';
import Rent from '../../models/rent';

declare module 'express' { 
   export interface Request {
      user?: any,
      validationError?: string[],
      bill?: Bill,
      originalRent?: Rent,
      car?: Car
   }
 }

 export {};
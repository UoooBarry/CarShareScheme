import { Request } from 'express';
import Bill from '../../models/bill'
import Rent from '../../models/rent';

declare module 'express' { 
   export interface Request {
      user?: any,
      validationError?: string[],
      bill?: Bill,
      originalRent?: Rent
   }
 }

 export {};
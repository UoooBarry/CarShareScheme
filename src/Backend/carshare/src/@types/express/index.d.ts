import { Request } from 'express';
import Bill from '../../models/bill'

declare module 'express' { 
   export interface Request {
      user?: any,
      validationError?: string[],
      bill?: Bill
   }
 }

 export {};
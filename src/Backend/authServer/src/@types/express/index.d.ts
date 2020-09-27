/* 
    Author: Yongqian Huang, created at: 04/09/2020
*/
declare module 'express' { 
   export interface Request {
      user?: any,
      validationError?: string[]
   }
 }

 export {};
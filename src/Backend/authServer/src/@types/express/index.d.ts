declare module 'express' { 
   export interface Request {
      user?: any,
      validationError?: string[]
   }
 }

 export {};
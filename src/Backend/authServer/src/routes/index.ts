
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, ROUTER FOR REGISTER AND LOGIN *
 *      YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN      *
 *      Yongqian Huang, 07/08/2020, Add email existed validation       *
 *      Yongqian Huang, 07/08/2020, Added SMS based 2FA                *
 *      Yongqian Huang, 13/08/2020, Improve security                   *
 *      Bach Dao, 18/08/2020, Change register router 
 *      Yongqian Huang, 04/09/2020 Migrate to typescript               *
 *        Yongqian Huang, 29/09/2020, Apply factor pattern
 ***********************************************************************/

require('dotenv').config();
import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import passwordHash from 'password-hash';
import _login from '../repository/loginRepository';
import _customer from '../repository/customerRepository';
import _services from '../helpers/serviceHelper';
import { generateAccessToken } from '../helpers/authorizationHelper';
import validatorFactory from '../helpers/validatorFactory';
const mobileValidator = validatorFactory.getValidator('mobile');
const registerValidator = validatorFactory.getValidator('register');


router.get('/getCode', mobileValidator.validate ,(req: Request,res: Response) => {
    const validationErrors = req.validationError;
    if(validationErrors && validationErrors.length > 0){
        res.json({
          message: "fail",
          errors: validationErrors,
        });
      }else{
        //put the code and send SMS
        _services.putOneCode(<any>req.query.contact_number)
        .then(()=> {
            res.json({
                message: 'success',
                description: 'Register code has been sent to your phone. The code will expire in 1 minute.'
            });
        }).catch((err)=>{
            console.log(err);
        })
      }

    
});

router.post('/register', registerValidator.validate, async (req: Request,res: Response) => {
        const validationErrors = req.validationError;
        const verifiedResult = await _services.verifyOneCode(req.body.contact_number, req.body.code);
        //check mobile code
        if(!verifiedResult && process.env.NODE_ENV != 'test'){
            res.json({
                message: "fail",
                errors: ["One time code verified failed", "One time code is not correct"]
            });
            return;
        }

        if(validationErrors && validationErrors.length > 0){
            res.json({
              message: "fail",
              errors: validationErrors,
            });
          }else{
            try{
                //Create a new user if it is correct
                var customer = await _customer.create(
                    req.body.first_name,
                    req.body.family_name,
                    req.body.gender,
                    req.body.date_of_birth,
                    req.body.contact_number
                )
                //Create login for user
                await _login.create(
                    req.body.email,
                    passwordHash.generate(req.body.password),
                    customer.id
                )
    
                res.json({
                    message: 'success'
                });
            }catch(err){
                console.log(err);
            }
          }
        

});

router.post('/authorize', (req, res) => {
    const email = req.body.email;
    if (!email) res.sendStatus(403);

    _login.getByEmail(
        email
    )
        .then(async (login) => {
            if (login != null && login.activate === true && passwordHash.verify(req.body.password, login.password)) {
                const customer = await login.user;
                const token = generateAccessToken(customer);
                res.json({
                    token,
                    message: 'success',
                    customer_name: customer.first_name
                });
            } else {
                res.json({
                    message: 'fail',
                    reason: 'Information unmatched'
                });
            }
        })
});

export default router;
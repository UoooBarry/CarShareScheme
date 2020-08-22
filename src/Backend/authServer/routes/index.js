
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, ROUTER FOR REGISTER AND LOGIN *
 *      YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN      *
 *      Yongqian Huang, 07/08/2020, Add email existed validation       *
 *      Yongqian Huang, 07/08/2020, Added SMS based 2FA                *
 *      Yongqian Huang, 13/08/2020, Improve security                   *
 *      Bach Dao, 18/08/2020, Change register router                   *
 ***********************************************************************/

require('dotenv').config();
const express = require('express');
const router = express.Router();
const passwordHash = require('password-hash');
const _login = require('../repository/loginRepository');
const _customer = require('../repository/customerRepository');
const _services = require('../repository/serviceRepository');
const authorize = require('../helpers/authorizationHelper');
const {registerValidator, mobileValidator, validateResult} =require('../helpers/validator');


router.get('/getCode', mobileValidator ,(req,res) => {
    validateResult(req)
        .then(() => {
            //put the code and send SMS
            _services.putOneCode(req.query.contact_number)
                .then(()=> {
                    res.json({
                        message: 'success',
                        description: 'Register code has been sent to your phone. The code will expire in 1 minute.'
                    });
                }).catch((err)=>{
                    console.log(err);
                })
        })
        .catch(errors => {
            res.json({
                message: "fail",
                errors
            })
        })

    
});

router.post('/register', registerValidator, async (req, res) => {
        const verifiedResult = await _services.verifyOneCode(req.body.contact_number, req.body.code);
        //check mobile code
        if(!verifiedResult && process.env.NODE_ENV != 'test'){
            res.json({
                message: "fail",
                errors: ["One time code verified failed", "One time code is not correct"]
            });
            return;
        }

        //check captcha response
        const captchaResponse = await _services.getRecaptchaRes(req.body.recaptcha_token);
        if (!captchaResponse  && process.env.NODE_ENV != 'test') {
            res.json({
                message: "fail",
                errors: ["Captcha verified failed", captcha.data]
            });
            return;
        }

        validateResult(req)
            .then(async ()=> {
                try{
                    //Create a new user if it is correct
                    var customer = await _customer.create(
                        req.body.first_name,
                        req.body.family_name,
                        req.body.gender,
                        req.body.date_of_birth,
                        req.body.contact_number,
                        req.body.gender,
                        req.body.date_of_birth
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
            })
            .catch(errors => {
                res.json({
                    message: "fail",
                    errors
                })
            })

        

    });

router.post('/authorize', (req, res) => {
    const email = req.body.email;
    if (!email) res.sendStatus(403);

    _login.getByEmail(
        email
    )
        .then(async (login) => {
            if (login != null && login.activate === true && passwordHash.verify(req.body.password, login.password)) {
                const customer = await login.getCustomer();
                const token = authorize.generateAccessToken(customer);
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

function validate(errs){
    //check and return errors
    if (!errs.isEmpty()) {
        let errors = [];
        errs.array().forEach(
            err => errors.push(err.msg)
        )

        return Promise.reject({
            message: "fail",
            errors
        })
    }

    return Promise.resolve(true);
}

module.exports = router;
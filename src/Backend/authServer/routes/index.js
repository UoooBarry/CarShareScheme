
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, ROUTER FOR REGISTER AND LOGIN *
 *      YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN      *
 *      Yongqian Huang, 07/08/2020, Add email existed validation       *
 *      Yongqian Huang, 07/08/2020, Added SMS based 2FA                *
 *      Yongqian Huang, 13/08/2020, Improve security                   *
 ***********************************************************************/

require('dotenv').config();
const express = require('express');
const router = express.Router();
const passwordHash = require('password-hash');
const _login = require('../repository/loginRepository');
const _customer = require('../repository/customerRepository');
const _services = require('../repository/serviceRepository');

const {
    check,
    validationResult
} = require('express-validator');
const JWT = require('jsonwebtoken');


router.get('/getCode', [
    check('contact_number').not().isEmpty().withMessage('Contact number cannot be empty'),
    check('contact_number').isLength({
    min: 9,
    max: 9
}).withMessage('Contact number should be 9 digits').matches(/^[4][0-9]*$/).withMessage('Contact must be numbers start with 4'),
check('contact_number').custom((contact) => { //check unique contact number
    return new Promise(async (resolve,reject) => {
        const rows = await _customer.getByContact(contact);
        //if no rows are fetched
        if (rows.length === 0) {
            resolve(true);
        } else {
            reject(new Error('Contact number already exists'));
        }
    })
})
]
,async (req,res) => {
    const errs = validationResult(req);
    //check and return errors
    try{
        await validate(errs); //try to organize errors into a json
    }catch(msg){
        res.json(msg);
        return;
    }

    //put the code and send SMS
    await _services.putOneCode(req.query.contact_number);
    res.json({
        message: 'success',
        description: 'Register code has been sent to your phone. The code will expire in 1 minute.'
    });
});

router.post('/register',
    [
        check('email').isEmail().withMessage("Email format unmatched"),
        check('email').custom(async (email) => {
            return new Promise(async (resolve, reject) => {
                const row = await _login.getByEmail(email);
                //if no rows are fetched
                if (row === null) {
                    resolve(true);
                } else {
                    reject(new Error('Email already exists'));
                }
            })
        }),
        check('password').isLength({
            min: 6
        }).withMessage('Password should at least 6 digits long'),
        check('first_name').not().isEmpty().withMessage('FirstName cannot be empty'),
        check('family_name').not().isEmpty().withMessage('FamilyName cannot be empty'),
        check('contact_number').not().isEmpty().withMessage('Contact number cannot be empty'),
        check('contact_number').isLength({
            min: 9,
            max: 9
        }).withMessage('Contact number should be 9 digits').matches(/^[4][0-9]*$/).withMessage('Contact must be numbers start with 4'),
        check('code').not().isEmpty().withMessage('Please enter your SMS validation code')
    ], async (req, res) => {
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

        const errs = validationResult(req);
        //check and return errors
        try{
            await validate(errs);
        }catch(msg){
            res.json(msg);
            return;
        }

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


    });

router.post('/authorize', (req, res) => {
    const email = req.body.email;
    if (!email) res.sendStatus(403);

    _login.getByEmail(
        email
    )
        .then(async (login) => {
            if (login != null && passwordHash.verify(req.body.password, login.password)) {
                const customer = await login.getCustomer();
                JWT.sign({
                    customer
                }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                    if (err) {
                        console.log(err);
                    }
                    res.json({
                        token,
                        message: 'success',
                        customer_name: customer.first_name
                    });
                })
            } else {
                res.json({
                    message: 'fail',
                    reason: 'Information unmatched'
                });
            }
        })
});

router.post('/validate', (req, res) => {
    const token = req.body.token;
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        res.json(data);
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
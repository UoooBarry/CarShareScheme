 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, ROUTER FOR REGISTER AND LOGIN *
 *      YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN      *
 ***********************************************************************/

require('dotenv').config();
const express = require('express');
const router = express.Router();
const passwordHash = require('password-hash');
const _login = require('../repository/loginRepository');
const _customer = require('../repository/customerRepository');
const {
    check,
    validationResult
} = require('express-validator');
const JWT = require('jsonwebtoken');

router.post('/register',
    [
        check('email').isEmail().withMessage("Email format unmatched"),
        check('password').isLength({
            min: 6
        }).withMessage('Password should at least 6 digits long'),
        check('first_name').not().isEmpty().withMessage('FirstName cannot be empty'),
        check('family_name').not().isEmpty().withMessage('FamilyName cannot be empty'),
        check('contact_number').isLength({
            min: 10,
            max: 10
        }).withMessage('Contact number should be 10 digits').matches(/^[0][0-9]*$/).withMessage('Contact must be numbers start with 0')
    ], async (req, res) => {
        const errs = validationResult(req);
        //check and return errors
        if (!errs.isEmpty()) {
            let errors = [];
            errs.array().forEach(
                err => errors.push(err.msg)
            )
            res.json({
                message: "fail",
                errors
            });

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

router.post('/login', (req, res) => {
    const email = req.body.email;
    if (!email) res.sendStatus(403);

    _login.getByEmail(
            email
        )
        .then(async (login) => {
            const customer = await login.getCustomer();
            if (customer != null && passwordHash.verify(req.body.password, login.password)) {
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

module.exports = router;
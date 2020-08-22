const _login = require('../repository/loginRepository');
const _customer = require('../repository/customerRepository');
const {
    check,
    validationResult
} = require('express-validator');

const mobileValidator = [
    check('contact_number').not().isEmpty().withMessage('Contact number cannot be empty'),
    check('contact_number').isLength({
    min: 9,
    max: 9
    }).withMessage('Contact number should be 9 digits').matches(/^[4][0-9]*$/).withMessage('Contact must be numbers start with 4')
]


const registerValidator = [
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
    mobileValidator,
    check('code').not().isEmpty().withMessage('Please enter your SMS validation code')
]


const validateResult = (req) => {
    const errs = validationResult(req);
        //check and return errors
    if (!errs.isEmpty()) {
        let errors = [];
        errs.array().forEach(
            err => errors.push(err.msg)
        )

        return Promise.reject(errors);
    }

    return Promise.resolve(true);
}

module.exports = {registerValidator, mobileValidator, validateResult}

const {
    check,
    validationResult
} = require('express-validator');

const profileValidator = [
    check('first_name').not().isEmpty().withMessage('FirstName cannot be empty'),
    check('family_name').not().isEmpty().withMessage('FamilyName cannot be empty'),
    check('contact_number').not().isEmpty().withMessage('Contact number cannot be empty'),
    check('contact_number').isLength({
        min: 9,
        max: 9
    }).withMessage('Contact number should be 9 digits').matches(/^[4][0-9]*$/).withMessage('Contact must be numbers start with 4')
]


const carValidator = [
    check('name').not().isEmpty().withMessage('Name cannot be empty'),
    check('model').not().isEmpty().withMessage('Model cannot be empty'),
    check('brand').not().isEmpty().withMessage('Brand cannot be empty'),
    check('location_id').not().isEmpty().withMessage('Location id cannot be empty'),
    check('seats').matches(/^[2-9]*$/).withMessage('Seats cannot be less than 2'),
    check('addons').not().isEmpty().withMessage('Addons cannot be empty'),
    check('price').not().isEmpty().withMessage('Price cannot be empty')
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


module.exports = {profileValidator, validateResult, carValidator}
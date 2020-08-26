
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

module.exports = {profileValidator, validateResult}
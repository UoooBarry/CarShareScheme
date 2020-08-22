const express = require('express');
const router = express.Router();
const JWT = require('jsonwebtoken');
const _Customer = require('../repository/customerRepository');
const uploadFile = require('../helpers/Uploader');
const {
    check,
    validationResult
} = require('express-validator');
const authorize = require('../helpers/authorizationHelper');
const multer  = require('multer')
const avatarUpload = multer({ 
    dest: 'uploads/'
 })


//GET /api/customers/:id
router.get('/:id/', async (req, res) => {
    const customer = await _Customer.getById(req.params.id);
    if (customer) {
        res.json(customer);
    } else {
        res.sendStatus(403);
    }
});

//Use multer middleware to handle image
router.patch('/avatar', [authorize.verifyToken, avatarUpload.single('image')], (req,res) => {
        //Get the file type
        const fileName = req.file.originalname;
        const fileType = fileName.split('.')[1];
        console.log(fileType + " " + req.file.size);
        if(req.file.size > 20000 && (fileType != 'png' || fileType != 'jpg')){
            res.json({message: "fail"});
            return;
        }

        uploadFile(req.user.id, 'Avatar', req.file.path) //upload file to avatar path
            .then(() => {
                console.log('change');
                res.json({message: "success"})
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "fail"})
            })
})

//GET /api/customers/
router.get('/', verifyToken, async (req, res) => {
    const customer = await _Customer.getById(req.user.id);
    if (customer) {
        res.json({ message: "success", customer });
    } else {
        res.sendStatus(403);
    }
});


router.patch('/', [
    check('first_name').not().isEmpty().withMessage('FirstName cannot be empty'),
    check('family_name').not().isEmpty().withMessage('FamilyName cannot be empty'),
    check('contact_number').not().isEmpty().withMessage('Contact number cannot be empty'),
    check('contact_number').isLength({
        min: 9,
        max: 9
    }).withMessage('Contact number should be 9 digits').matches(/^[4][0-9]*$/).withMessage('Contact must be numbers start with 4'),
    verifyToken
], async (req, res) => {
    const errs = validationResult(req);
    //check and return errors
    try {
        await validate(errs);
    } catch (msg) {
        res.json(msg);
        return;
    }

    /*Update customer information and return message */
    _Customer.update(req.user.id, req.body)
        .then(() => {
            res.json({
                message: "success"
            })
        })
        .catch((err) => {
            console.log(err);
            res.json({
                message: "fail"
            })
        })

});

//Mange and return the array of errors
function validate(errs) {
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

function verifyToken(req,res,next){
    //Get auth header
    const header = req.headers['authorization'];
    //Check exsit
    if(typeof header !== 'undefined' || header === null){
      //Spilt at the space 
      var token = header.split(' ')[1];
      JWT.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if(err){
          return res.json({message: 'fail'})
        } 
         // Set the token
        req.user = data.customer;
        // Next
        next();
      });
    }else{
      console.log('auth err');
      //Forbidden
      res.sendStatus(403);
    }
}


module.exports = router;
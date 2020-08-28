/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION *
 * *******************************************************/

const express = require('express');
const router = express.Router();
const _Customer = require('../repository/customerRepository');
const uploadFile = require('../helpers/Uploader');
const authorize = require('../helpers/authorizationHelper');
const multer  = require('multer')
const avatarUpload = multer({ 
    dest: 'uploads/'
 })
const {profileValidator, validateResult} = require('../helpers/validator');

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

//GET /api/customers/ for single customer profile
router.get('/', authorize.verifyToken, async (req, res) => {
    const customer = await _Customer.getById(req.user.id);
    if (customer) {
        res.json({ message: "success", customer });
    } else {
        res.sendStatus(403);
    }
});


router.patch('/', [profileValidator,authorize.verifyToken], async (req, res) => {
    validateResult(req)
        .then(()=> {
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
        })
        .catch(errors => {
            res.json({
                message: "fail",
                errors
            })
        })
});


module.exports = router;
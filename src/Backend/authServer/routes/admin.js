/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED_AT: 13/08/2020 *
 **************************************************/

require('dotenv').config();
const express = require('express');
const router = express.Router();
const _Customer = require('../repository/customerRepository');
const _Login = require('../repository/loginRepository');
const authorize = require('../helpers/authorizationHelper');

//GET /api/admin/verify return if an token holder is an admin
router.get('/verify', authorize.verifyToken, (req,res) => {
  if(req.user.admin){
    res.json({authorize: true});
  }else{
    res.json({authorize: false});
  }
});

//GET /api/admin/customers, return all customers with activate status
router.get('/customers', (req,res) => {
  _Customer.getAll()
           .then(customers => {
              res.json({
                customers
              })
           })
           .catch((error) => {
            res.json({message: 'fail', reason: error});
        })
});




//PATCH api/admin/activate/:id/
router.patch('/activate/:id/', authorize.verifyToken, (req,res) => {
  //If the token holder is not admin, return forbidden
    if(req.user.admin != true)
        res.sendStatus(403);


    _Login.activate(req.params.id) 
            .then(
                res.json({message: 'success'})
            )
            .catch((error) => {
                res.json({message: 'fail', reason: error})
            })
});


module.exports = router;

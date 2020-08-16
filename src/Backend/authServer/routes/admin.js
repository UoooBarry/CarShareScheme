/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED_AT: 13/08/2020 *
 **************************************************/

require('dotenv').config();
const express = require('express');
const router = express.Router();
const _Customer = require('../repository/customerRepository');
const _Login = require('../repository/loginRepository');
const JWT = require('jsonwebtoken');

router.get('/test',(req,res) => {
    res.json("hello world");
})

router.patch('/activate/:id/', verifyToken, (req,res) => {
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

router.post('/authorize', (req, res) => {
  const email = req.body.email;
  if (!email) res.sendStatus(403);

  _login.getByEmail(
      email
  )
      .then(async (login) => {
          if (login != null && login.activate === true && passwordHash.verify(req.body.password, login.password)) {
            if(login.admin){
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
            }else{
              res.json({
              message: 'fail',
              reason: 'This account is not admin'
          });}
          } else {
              res.json({
                  message: 'fail',
                  reason: 'Information unmatched'
              });
          }
      })
});

function verifyToken(req,res,next){
    //Get auth header
    const header = req.headers['authorization'];
    //Check exsit
    if(typeof header !== 'undefined'){
      //Spilt at the space 
      var token = header.split(' ')[1];
      JWT.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if(err){
          console.log(err);
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

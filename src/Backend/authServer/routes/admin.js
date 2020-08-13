/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED_AT: 13/08/2020 *
 **************************************************/

require('dotenv').config();
const express = require('express');
const router = express.Router();
const _Customer = require('../repository/customerRepository');
const _Login = require('../repository/loginRepository');

router.patch('activate/:id/',(req,res) => {
    _Login.activate(req.params.id) 
            .then(
                res.json({message: 'success'})
            )
            .catch((error) => {
                res.json({message: 'success', reason: error})
            })
});
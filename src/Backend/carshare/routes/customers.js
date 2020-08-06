const express = require('express');
const router = express.Router();
const _Customer = require('../repository/customerRepository');

router.get('/:id/', async (req, res) => {
    const customer = await _Customer.getById(req.params.id);
    if(customer){
        res.json(customer);
    }else{
        res.sendStatus(403);
    }
})





module.exports = router;
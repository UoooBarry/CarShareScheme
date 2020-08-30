const express = require('express');
const router = express.Router();
const _Location = require('../repository/locationRepository');



//GET: /api/locations
router.get('/', (req,res) => {
    _Location.getAll()
             .then(locations => {
                res.json({
                    locations
                })
             })
             .catch((error) => {
              res.json({message: 'fail', reason: error});
          })
  });



module.exports = router;
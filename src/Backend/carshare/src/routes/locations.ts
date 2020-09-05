/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION 
 *           Yongqian Huang, 03/09/2020, Migrate to ts*
 * *******************************************************/

import express,{Request, Response} from 'express';
const router = express.Router();
import _Location from '../repository/locationRepository';


//GET: /api/locations
router.get('/', (req: Request, res:Response) => {
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

//GET: /api/locations/:id
router.get('/:id', (req: Request, res:Response) => {
    _Location.get(parseInt(req.params.id))
             .then(location => {
                res.json({
                    location
                })
             })
             .catch((error) => {
              res.json({message: 'fail', reason: error});
          })
  });



export default router;
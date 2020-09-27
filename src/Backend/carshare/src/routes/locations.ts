/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION 
 *           Yongqian Huang, 03/09/2020, Migrate to ts*
 *           Yongqian Huang, 03/09/2020, Get nearest Location*
 * * Updated Bach Dao, 03/09/2020, Get Location by ID *
 *   Updated Bach Dao, 26/09/2020, return all locations base on user location *
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
                 res.json({
                     message: 'fail',
                     errors: error
                 });
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
              res.json({message: 'fail', errors: error});
            })
  });

  //GET: /api/locations/list/nearest
router.get('/list/nearest', (req: Request, res: Response) => {
    _Location.getNearestAllLocations(<string>req.query.from)
                .then((locations) => {
                    res.json({
                        locations
                    })
                })
                .catch((err) => {
                    console.log(err);
                    res.sendStatus(404);
                })
})



export default router;
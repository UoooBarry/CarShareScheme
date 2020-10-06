/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION 
 *           Yongqian Huang, 03/09/2020, Migrate to ts
 *           Yongqian Huang, 19/09/2020, Upload licenses*
 * * Yongqian Huang, 29/09/2020, Apply factor pattern *
 * *******************************************************/

import express,{Request, Response, NextFunction} from 'express';
const router = express.Router();
import _Customer from '../repository/customerRepository';
import uploadFile from '../helpers/Uploader';
import { verifyToken } from '../helpers/authorizationHelper';
import _License from '../repository/licenseRepository';
import multer from 'multer';
const avatarUpload = multer({ 
    dest: 'uploads/'
})
import validatorFactory from '../helpers/validatorFactory';
const ProfileValidator = validatorFactory.getValidator('profile');

//GET /api/customers/:id
router.get('/:id/', async (req, res) => {
    const customer = await _Customer.get(parseInt(req.params.id));
    if (customer) {
        res.json(customer);
    } else {
        res.sendStatus(403);
    }
});

//Use multer middleware to handle image
router.patch('/avatar', [verifyToken, avatarUpload.single('image')], (req: Request, res: Response) => {
        //Get the file type
        const fileName:string = req.file.originalname;
        const fileType:string = fileName.split('.')[1];
        if (fileType !== "png" && fileType != "jpg") {
            res.json({
              message: "fail",
              reason: 'File format unsupported.'
            });
        }
        if(req.file.size > 200000){
            res.json({
                message: "fail",
                reason: 'File too big.'
            });
            return;
        }

        uploadFile(req.user.id, 'Avatar', req.file.path) //upload file to avatar path
            .then(() => {
                res.json({message: "success"})
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "fail"})
            })
});

//GET /api/customers/licenses/requests get all the pending licenses validation requests
router.get('/licenses/requests', [verifyToken], (req: Request, res: Response) => {
    if (!req.user.admin) res.sendStatus(403); //Admin only
    
    
});

router.post('/licenses/upload/:dimension', [verifyToken, avatarUpload.single('image')], async (req: Request, res: Response) => {
    if (! await _License.get(req.user.id)) { //If user currently has no license table create one
        await _License.create({
            user_id: req.user.id
        })
    }

    
    //Get the file type
    const fileName: string = req.file.originalname;
    const fileType: string = fileName.split('.')[1];
    if (fileType != "png") {
        if (fileType != "jpg") {
            res.json({
                message: "fail",
                reason: 'File format unsupported.'
            });
            return;
        }
    }
    if (req.file.size > 200000) {
        res.json({
            message: "fail",
            reason: 'File too big.'
        });
        return;
    }

    uploadFile(req.user.id, `license/${req.params.dimension}`, req.file.path) //upload file to avatar path
        .then(() => {
            _License.updateImage(req.user.id);
            res.json({ message: "success" })
        })
        .catch((err) => {
            console.log(err);
            res.json({ message: "fail" })
        })
})

//GET /api/customers/ for single customer profile
router.get('/', verifyToken, async (req: Request, res: Response) => {
    const customer = await _Customer.get(req.user.id);
    if (customer) {
        res.json({ message: "success", customer });
    } else {
        res.sendStatus(403);
    }
});


router.patch('/', [ProfileValidator.validate, verifyToken], (req: Request, res: Response) => {
    const validationErrors = req.validationError;
    if(validationErrors && validationErrors.length > 0){
        res.json({
          message: "fail",
          errors: validationErrors,
        });
      }else{
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
      }
});


export default router;
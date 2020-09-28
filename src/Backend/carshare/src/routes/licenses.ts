/************************************************
 * @AUTHOR YONGQIAN HUANG CREATED AT 20/09/2020 *
 ************************************************/

import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();
import _Customer from '../repository/customerRepository';
import uploadFile from '../helpers/Uploader';
import { verifyToken } from '../helpers/authorizationHelper';
import _License from '../repository/licenseRepository';
import multer from 'multer';
const imageUpload = multer({ 
    dest: 'uploads/'
})
 


//GET /api/licenses/pending get all the pending licenses validation requests
router.get('/pending', [verifyToken], (req: Request, res: Response) => {
  if (!req.user.admin) res.sendStatus(403); //Admin only
  
  _License.getPending()
    .then((pending) => {
      res.json({pending})
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "fail" });
    })
});


//PATCH /api/licenses/:id/accept
router.patch('/:id/accept', [verifyToken], (req: Request, res: Response) => {
  if (!req.user.admin) res.sendStatus(403); //Admin only
  
  _License.update(parseInt(req.params.id), {isValidated: true})
    .then(() => {
      res.json({message: 'success'})
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "fail" });
    })
});

//POST /api/licenses/upload/:dimension
router.post('/upload/:dimension', [verifyToken, imageUpload.single('image')], async (req: Request, res: Response) => {
  if (! await _License.get(req.user.id)) { //If user currently has no license table create one
    await _License.create({
      user_id: req.user.id
    })
  }

  
  //Get the file type
  const fileName: string = req.file.originalname;
  const fileType: string = fileName.split('.')[1];
  if (fileType !== "png" && fileType != "jpg") {
      res.json({
        message: "fail",
        reason: 'File format unsupported.'
      });
  }
  if (req.file.size > 200000) {
    res.json({
      message: "fail",
      reason: 'File too big.'
    });
    return;
  }

  uploadFile(req.user.id, `license/${req.params.dimension}`, req.file.path) //upload file to license path
    .then(() => {
      _License.updateImage(req.user.id);
      res.json({ message: "success" })
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "fail" });
    })
});

export default router;
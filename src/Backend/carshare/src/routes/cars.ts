/*******************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION *
 *  YONGQIAN HUANG, 23/07/2020, MIGRATE TO POSTGRESQL  *
 *  Yongqian Huang. 17/08/2020, Car listing and description
 *  Yongqian Huang. 19/08/2020, Car creating endpoint   *
 * Yongqian Huang. 28/08/2020, Car creating Validation  *
 * Yongqian Huang, 29/08/2020, Add car share image upload
 * Yongqian Huang, 02/09/2020, Return if the car is popular*
 *******************************************************/

import express,{Request, Response, NextFunction} from 'express';
const router = express.Router();
import _Car from '../repository/carRepository';
import _Location from '../repository/locationRepository';
import {verifyToken} from '../helpers/authorizationHelper';
import CarValidator from '../validators/CarValidator';
import uploadFile from "../helpers/Uploader";
import multer from 'multer';
const carImageUpload = multer({
  dest: "uploads/cars/",
});

//GET: /api/cars
router.get("/", (req: Request, res: Response) => {
  /*If qeury all = true, get all cars */
  if (req.query.all) {
    _Car
      .getAll(null, null)
      .then((cars) => {
        res.json({ cars });
      })
      .catch(() => {
        res.sendStatus(404);
      });
  } else {
    _Location.getAllValidateCars(req.query.from, req.query.sort, req.query.order)
      .then(async (locations: any) => {
        res.json({ locations });
      })
      .catch((err) => {
        res.sendStatus(403);
      });
  }
});
//GET: /api/cars/:brand
router.get("/search", (req: Request, res: Response) => {
  _Car
    .getBy(req.query.query)
    .then((cars) => {
      res.json({ cars });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(403);
    });
});

//GET: /api/cars/:id
router.get("/:id/", (req: Request, res: Response) => {
  _Car
    .get(req.params.id)
    .then(async (car: any) => {
      const popularCars = await _Car.getMostViewed();
      //Push popular attribute to car json
      car.dataValues.popular = popularCars.includes(car.id);
      res.json({ car });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(403);
    });
});

//Delete: /api/cars/:id
router.delete("/:id/", verifyToken, (req: Request, res: Response) => {
  if (!req.user.admin) res.sendStatus(403);

  _Car
    .remove(req.params.id)
    .then(() => {
      res.json({ message: "success" });
    })
    .catch((err) => {
      res.json({
        message: "fail",
        err,
      });
    });
});

//GET: /api/cars/attribute/brands
router.get("/attribute/brands", (req: Request, res: Response) => {
  _Car
    .getBrands()
    .then((brands) => {
      res.json({ brands });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(403);
    });
});

//POST: /api/cars/create
router.post("/create", [ CarValidator.validate, verifyToken], (req: Request, res: Response) => {
  if (!req.user.admin) res.sendStatus(403);

  const validationErrors = req.validationError;
  if(validationErrors){
    res.json({
      message: "fail",
      validationErrors,
    });
  }else{
    const car = {
      name: req.body.name,
      brand: req.body.brand,
      model: req.body.model,
      location_id: req.body.location_id,
      purchase_date: req.body.purchase_date,
      price: req.body.price,
      seats: req.body.seats,
      luggages: req.body.luggages,
      doors: req.body.doors,
      gear: req.body.gear,
      addons: req.body.addons,
      description: req.body.description,
    };
    _Car
      .create(car)
      .then(() => {
        res.json({
          message: "success",
        });
      })
      .catch((err) => {
        res.json({
          message: "fail",
          err,
        });
      });
  }

});

//PATCH: /api/cars/:id
router.patch("/:id/", [verifyToken], (req: Request, res: Response) => {
  if (!req.user.admin) res.sendStatus(403);

  const car = {
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    addons: req.body.addons,
    price: req.body.price,
    seats: req.body.seats,
    available: req.body.available,
    luggages: req.body.luggages,
    doors: req.body.doors,
  };
  _Car
    .update(req.params.id, car)
    .then(() => {
      res.json({
        message: "success",
      });
    })
    .catch((err) => {
      res.json({
        message: "fail",
        err,
      });
    });
});

//PATCH: /api/cars/image/:id
router.patch(
  "/image/:id",
  [verifyToken, carImageUpload.single("image")],
  (req: any, res: any) => {
    console.log(req.user.admin);
    if (!req.user.admin) res.sendStatus(403);
    console.log("file name is:" + req.file.originalname);
    //Get the file type
    const fileName = req.file.originalname;
    const fileType = fileName.split(".")[1];
    console.log("file name is:" + fileType);
    if (req.file.size > 2097152 && (fileType != "png" || fileType != "jpg")) {
      res.json({ message: "fail" });
      return;
    }

    uploadFile(req.params.id, "Car", req.file.path) //upload file to avatar path
      .then(() => {
        res.json({ message: "success" });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "fail" });
      });
  }
);

export default router;

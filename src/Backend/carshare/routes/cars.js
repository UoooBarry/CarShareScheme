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

const express = require("express");
const router = express.Router();
const _Car = require("../repository/carRepository");
const _Location = require("../repository/locationRepository");
const authorize = require("../helpers/authorizationHelper");
const { carValidator, validateResult } = require("../helpers/validator");
const uploadFile = require("../helpers/Uploader");
const multer = require("multer");
const carImageUpload = multer({
  dest: "uploads/cars/",
});

//GET: /api/cars
router.get("/", (req, res) => {
  /*If qeury all = true, get all cars */
  if (req.query.all) {
    _Car
      .getAll()
      .then((cars) => {
        res.json({ cars });
      })
      .catch(() => {
        res.sendStatus(404);
      });
  } else {
    _Location
      .getAllValidateCars(req.query.from, req.query.sort, req.query.order)
      .then(async (locations) => {
        res.json({ locations });
      })
      .catch((err) => {
        res.sendStatus(403);
      });
  }
});
//GET: /api/cars/:brand
router.get("/search", (req, res) => {
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
router.get("/:id/", (req, res) => {
  _Car
    .get(req.params.id)
    .then(async (car) => {
      const popularCars = await _Car.getMostViewed();
      car.push({popular: popularCars.includes(car.id) });
      res.json({ car });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(403);
    });
});

//Delete: /api/cars/:id
router.delete("/:id/", authorize.verifyToken, (req, res) => {
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
router.get("/attribute/brands", (req, res) => {
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
router.post("/create", [carValidator, authorize.verifyToken], (req, res) => {
  if (!req.user.admin) res.sendStatus(403);

  validateResult(req)
    .then(() => {
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
    })
    .catch((errors) => {
      res.json({
        message: "fail",
        errors,
      });
    });
});

//PATCH: /api/cars/:id
router.patch("/:id/", [authorize.verifyToken], (req, res) => {
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
  [authorize.verifyToken, carImageUpload.single("image")],
  (req, res) => {
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

module.exports = router;

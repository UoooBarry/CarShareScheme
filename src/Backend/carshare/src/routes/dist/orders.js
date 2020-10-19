"use strict";
/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 *         Yongqian Huang, 05/09/2020, Implement payment
 *         Yongqian Huang, 11/09/2020, Send receipt message
 *         Yongqian Huang, 22/09/2020, Extend rent and custom error *
 *         Yongqian Huang, 22/09/2020, Add validation of licenses *
 * Yongqian Huang, 29/09/2020, Apply factor pattern
 * Yongqian Huang, 14/10/2020, Fix car status not update
 *************************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var authorizationHelper_1 = require("../helpers/authorizationHelper");
var bill_1 = require("../models/bill");
var rentRepository_1 = require("../repository/rentRepository");
var billRepository_1 = require("../repository/billRepository");
var carRepository_1 = require("../repository/carRepository");
var licenseRepository_1 = require("../repository/licenseRepository");
var validatorFactory_1 = require("../helpers/validatorFactory");
var OrderValidator = validatorFactory_1["default"].getValidator('order');
var PaymentValidator = validatorFactory_1["default"].getValidator('payment');
var ExtendRentValidator = validatorFactory_1["default"].getValidator('extend');
var messageHelper_1 = require("../helpers/messageHelper");
var ItemNotFound_1 = require("../exceptions/ItemNotFound");
var IncorrectItem_1 = require("../exceptions/IncorrectItem");
var rent_1 = require("../models/rent");
var AccountUnavailable_1 = require("../exceptions/AccountUnavailable");
//POST: api/orders/create
router.post('/create', [OrderValidator.validate, authorizationHelper_1.verifyToken], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validationErrors, pendingRents, license, feeToPay, rent, bill, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validationErrors = req.validationError;
                if (!(validationErrors && validationErrors.length > 0)) return [3 /*break*/, 1];
                res.json({
                    message: "fail",
                    errors: validationErrors
                });
                return [3 /*break*/, 9];
            case 1:
                _a.trys.push([1, 8, , 9]);
                return [4 /*yield*/, rentRepository_1["default"].getUserPendingRents(req.user.id)];
            case 2:
                pendingRents = _a.sent();
                if (pendingRents.length > 0)
                    throw new AccountUnavailable_1["default"]("Your account already had one pending rent"); //Cannot have exsited rent
                return [4 /*yield*/, licenseRepository_1["default"].getByUserId(req.user.id)];
            case 3:
                license = _a.sent();
                if (!license || !license.isValidated)
                    throw new AccountUnavailable_1["default"]('Your account is not validate yet, please go to license validation page. Redirecting...');
                if (!req.car)
                    throw new ItemNotFound_1["default"]('Incorrect request car');
                feeToPay = (req.body.period * req.car.price + req.car.price * 0.1).toFixed(2);
                return [4 /*yield*/, rentRepository_1["default"].create({
                        car_id: req.body.car_id,
                        user_id: req.user.id,
                        start_from: req.body.start_from,
                        period: req.body.period
                    })];
            case 4:
                rent = _a.sent();
                return [4 /*yield*/, billRepository_1["default"].create({
                        user_id: req.user.id,
                        fee: feeToPay,
                        type: bill_1.BillType.RentFee,
                        rent_id: rent.id
                    })];
            case 5:
                bill = _a.sent();
                if (!(req.body.start_from <= new Date())) return [3 /*break*/, 7];
                return [4 /*yield*/, rent.car.update({
                        available: false
                    })];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                res.json({ bill: bill, rent: rent, feeToPay: feeToPay });
                return [3 /*break*/, 9];
            case 8:
                err_1 = _a.sent();
                res.json({
                    message: "fail",
                    errors: err_1.message
                });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
//GET: api/orders/extend/:id
router.post('/extend/:id', [ExtendRentValidator.validate, authorizationHelper_1.verifyToken], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validationErrors, feeToPay, newPeriod, newRent, bill, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validationErrors = req.validationError;
                if (!(validationErrors && validationErrors.length > 0)) return [3 /*break*/, 1];
                res.json({
                    message: "fail",
                    errors: validationErrors
                });
                return [3 /*break*/, 6];
            case 1:
                _a.trys.push([1, 5, , 6]);
                if (!req.originalRent)
                    throw new ItemNotFound_1["default"]('Rent not found');
                feeToPay = (req.body.period * req.originalRent.car.price).toFixed(2);
                //If pass payment validator
                if (req.body.payment_total !== feeToPay)
                    throw new IncorrectItem_1["default"]('Payment amount incorrect');
                //Update to complete
                return [4 /*yield*/, rentRepository_1["default"].update(parseInt(req.params.id), { status: rent_1.RentStatus.Extended })];
            case 2:
                //Update to complete
                _a.sent();
                newPeriod = req.originalRent.period + parseInt(req.body.period);
                return [4 /*yield*/, rentRepository_1["default"].create({
                        car_id: req.originalRent.car.id,
                        user_id: req.user.id,
                        start_from: req.originalRent.start_from,
                        period: newPeriod,
                        status: rent_1.RentStatus.InProgress
                    })];
            case 3:
                newRent = _a.sent();
                return [4 /*yield*/, billRepository_1["default"].create({
                        user_id: req.user.id,
                        fee: feeToPay,
                        isPaid: true,
                        type: bill_1.BillType.RentFee,
                        rent_id: newRent.id
                    })];
            case 4:
                bill = _a.sent();
                res.json({ bill: bill, newRent: newRent });
                return [3 /*break*/, 6];
            case 5:
                err_2 = _a.sent();
                res.sendStatus(400); //return bad request
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
//GET: api/orders/:id/
router.get('/:id/', [authorizationHelper_1.verifyToken], function (req, res) {
    rentRepository_1["default"].get(parseInt(req.params.id))
        .then(function (rent) {
        if ((rent === null || rent === void 0 ? void 0 : rent.user_id) != req.user.id)
            throw new IncorrectItem_1["default"]('Incorrect user');
        res.json({ rent: rent });
    })["catch"](function (err) {
        res.sendStatus(404);
    });
});
//Delete: /api/orders/:id
router["delete"]('/:id/', [authorizationHelper_1.verifyToken], function (req, res) {
    if (!req.user.admin)
        res.sendStatus(403);
    rentRepository_1["default"]["delete"](parseInt(req.params.id))
        .then(function () {
        res.json({ message: 'success' });
    })["catch"](function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});
// GET: /api/orders/personal
// Get all orders of the current user
router.get('/list/personal', [authorizationHelper_1.verifyToken], function (req, res) {
    rentRepository_1["default"].getByUserId(req.user.id)
        .then(function (rents) {
        res.json({
            rents: rents
        });
    })["catch"](function (err) {
        res.json({
            message: "fail",
            errors: err
        });
    });
});
// GET: /api/cars/
// Get all orders for admin
router.get('/', [authorizationHelper_1.verifyToken], function (req, res) {
    if (!req.user.admin)
        res.sendStatus(403);
    rentRepository_1["default"].getAll()
        .then(function (rents) {
        res.json({
            rents: rents
        });
    })["catch"](function (err) {
        res.json({
            message: "fail",
            errors: err
        });
    });
});
//PATCH: /api/cars/return
router.patch('/return', [authorizationHelper_1.verifyToken], function (req, res) {
    if (!req.user.admin)
        res.sendStatus(403);
    rentRepository_1["default"]["return"](req.body.rent_id, req.body.location_id)
        .then(function () {
        //Send message to user only in production environment
        if (process.env.NODE_ENV == 'production') {
            var text = "Thanks for order our rent services. Your rent id: " + req.body.rent_id + ", is successfully returned. Thank you for using our service!.";
            messageHelper_1["default"].sendMessage(req.user.contact_number, text);
        }
        res.json({
            message: 'success'
        });
    })["catch"](function (err) {
        res.json({
            message: "fail",
            errors: err
        });
    });
});
//PATCH: /api/cars/pickup
router.patch('/pickup', [authorizationHelper_1.verifyToken], function (req, res) {
    if (!req.user.admin)
        res.sendStatus(403);
    rentRepository_1["default"].pickUp(req.body.rent_id)
        .then(function () {
        //Send message to user only in production environment
        if (process.env.NODE_ENV == 'production') {
            var text = "Thanks for order our car rent service. \nYou order " + req.body.rent.id + " is successfully picked up!";
            messageHelper_1["default"].sendMessage(req.user.contact_number, text);
        }
        res.json({
            message: 'success'
        });
    })["catch"](function (err) {
        res.json({
            message: "fail",
            errors: err
        });
        console.log(err);
    });
});
router.post('/pay', [PaymentValidator.validate, authorizationHelper_1.verifyToken], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validationErrors, text, err_3;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                validationErrors = req.validationError;
                if (((_a = req.bill) === null || _a === void 0 ? void 0 : _a.user_id) != req.user.id)
                    res.sendStatus(403);
                if (!(validationErrors && validationErrors.length > 0)) return [3 /*break*/, 1];
                res.json({
                    message: "fail",
                    errors: validationErrors
                });
                return [3 /*break*/, 6];
            case 1:
                _d.trys.push([1, 5, , 6]);
                //If pass payment validator
                //Update bill status
                if (!req.bill || req.bill.isPaid)
                    throw new ItemNotFound_1["default"]('Bill not found'); //detect is the bill is already being paid, not resending message
                return [4 /*yield*/, billRepository_1["default"].pay(req.bill)];
            case 2:
                _d.sent();
                if (!(req.body.type === 'rent')) return [3 /*break*/, 4];
                //Send message to user only in production environment
                if (process.env.NODE_ENV == 'production') {
                    text = "Thanks for order our car rent service. \nYou can check your receipt here: https://carshare.uooobarry.com/receipt/" + ((_b = req.bill) === null || _b === void 0 ? void 0 : _b.rent.id) + " \n Please note that your rent will start at " + ((_c = req.bill) === null || _c === void 0 ? void 0 : _c.rent.start_from) + " . You should come to pick up location 30 mins in advanced.";
                    messageHelper_1["default"].sendMessage(req.user.contact_number, text);
                }
                if (!(req.bill.rent.start_from <= new Date())) return [3 /*break*/, 4];
                return [4 /*yield*/, carRepository_1["default"].deactivate(req.bill.rent.car.id)];
            case 3:
                _d.sent();
                _d.label = 4;
            case 4:
                res.json({
                    message: "success"
                });
                return [3 /*break*/, 6];
            case 5:
                err_3 = _d.sent();
                res.json({
                    message: "fail",
                    errors: err_3.message
                });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;

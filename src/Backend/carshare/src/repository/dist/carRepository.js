"use strict";
/******************************************************
 * @AUTHOR YONGQIAN HUANG, 19/08/2020, CAR SORT LOGIC *
 * updated in 27/09/2020 Bach Dao, get all cars/ car by id *
 *
 * Yongqian Huang: updated in 03/09/2020 migrate to typescript
 * Yongqian Huang: updated in 25/09/2020 filter helpers*
 * Yongqian Huang: updated in 25/09/2020 fixed most viewed*
 ******************************************************/
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
var car_1 = require("../models/car");
var sequelize_1 = require("sequelize");
var Op = sequelize_1["default"].Op;
var location_1 = require("../models/location");
var ItemNotFound_1 = require("../exceptions/ItemNotFound");
var comment_1 = require("../models/comment");
var customer_1 = require("../models/customer");
var carRepository = /** @class */ (function () {
    function carRepository() {
    }
    carRepository.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cars, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, car_1["default"].findAll({
                                order: [["name", "ASC"]]
                            })];
                    case 1:
                        cars = _a.sent();
                        return [2 /*return*/, Promise.resolve(cars)];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**Get by column and value */
    carRepository.prototype.getBy = function (word) {
        return __awaiter(this, void 0, void 0, function () {
            var search, whereClause, cars, err_2;
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        search = word.toLowerCase();
                        whereClause = (_a = {},
                            _a[Op.or] = [
                                sequelize_1["default"].where(sequelize_1["default"].fn("LOWER", sequelize_1["default"].col("brand")), (_b = {},
                                    _b[Op.like] = "%" + search + "%",
                                    _b)),
                                sequelize_1["default"].where(sequelize_1["default"].fn("LOWER", sequelize_1["default"].col("model")), (_c = {},
                                    _c[Op.like] = "%" + search + "%",
                                    _c)),
                                sequelize_1["default"].where(sequelize_1["default"].fn("LOWER", sequelize_1["default"].col("gear")), (_d = {},
                                    _d[Op.like] = "%" + search + "%",
                                    _d))
                            ],
                            _a);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, car_1["default"].findAll({
                                where: whereClause
                            })];
                    case 2:
                        cars = _e.sent();
                        return [2 /*return*/, Promise.resolve(cars)];
                    case 3:
                        err_2 = _e.sent();
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var car, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, car_1["default"].findOne({
                                where: { id: id },
                                include: [
                                    {
                                        model: comment_1["default"],
                                        include: [
                                            {
                                                model: customer_1["default"],
                                                attributes: ['id', 'first_name', 'family_name']
                                            }
                                        ]
                                    },
                                    {
                                        model: location_1["default"],
                                        attributes: ['name', 'address']
                                    }
                                ]
                            })];
                    case 1:
                        car = _a.sent();
                        //Update the view number by 1
                        if (car) {
                            car.update({
                                viewed: (car.viewed += 1)
                            });
                        }
                        else {
                            throw new ItemNotFound_1["default"]('Car not found');
                        }
                        return [2 /*return*/, Promise.resolve(car)];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.prototype.getMostViewed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cars, carsArr, err_4;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, car_1["default"].findAll({
                                where: {
                                    'viewed': (_a = {},
                                        _a[Op.ne] = null,
                                        _a)
                                },
                                attributes: ["id"],
                                order: [["viewed", "DESC"]],
                                limit: 3
                            })];
                    case 1:
                        cars = _b.sent();
                        carsArr = cars.map(function (car) {
                            return car.id;
                        });
                        return [2 /*return*/, Promise.resolve(carsArr)];
                    case 2:
                        err_4 = _b.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.prototype.create = function (car) {
        return __awaiter(this, void 0, void 0, function () {
            var err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, car_1["default"].create(car)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve(true)];
                    case 2:
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.prototype.getBrands = function () {
        return __awaiter(this, void 0, void 0, function () {
            var brands, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, car_1["default"].findAll({
                                attributes: [sequelize_1["default"].fn("DISTINCT", sequelize_1["default"].col("brand")), "brand"],
                                order: [["brand", "ASC"]]
                            })];
                    case 1:
                        brands = _a.sent();
                        return [2 /*return*/, Promise.resolve(brands)];
                    case 2:
                        err_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_6)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var car, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, car_1["default"].findOne({ where: { id: id } })];
                    case 1:
                        car = _a.sent();
                        return [4 /*yield*/, car.update(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve(true)];
                    case 3:
                        err_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_7)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, car_1["default"].destroy({ where: { id: id } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve(true)];
                    case 2:
                        err_8 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_8)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.prototype.deactivate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var car, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, car_1["default"].findOne({ where: { id: id } })];
                    case 1:
                        car = _a.sent();
                        return [4 /*yield*/, (car === null || car === void 0 ? void 0 : car.update({
                                available: false
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve(true)];
                    case 3:
                        err_9 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_9)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    carRepository.getInstance = function () {
        if (!carRepository.instance)
            carRepository.instance = new carRepository();
        return carRepository.instance;
    };
    return carRepository;
}());
exports["default"] = carRepository.getInstance();

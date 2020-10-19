"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 27/08/2020
 * Bach Dao, Updated at 25/09/2020*
 * Yongqian Huang updated at: 03/10/2020 rewrite filter   *
 * Yongqian Huang updated at: 06/10/2020 better filter logic   *
 **************************************************/
var _default = {
  name: "CarMixin",
  data: function data() {
    return {
      sort: "",
      order: "",
      cars: [],
      temp_cars: [],
      //storing temporary cars
      filtered: [],
      checkedTrack: 0,
      searchItem: "",
      loadingKey: 0
    };
  },
  watch: {
    filtered: function filtered(val) {
      //watch when filter changed, change the display cars
      this.cars = val;
    },
    checkedTrack: function checkedTrack(val) {
      if (val <= 0) {
        this.$router.go();
      }
    }
  },
  methods: {
    getCarData: function getCarData(res) {
      //get all car data from the location
      var allCars = [];
      var locations = res.data.locations;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var location = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = location.Cars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var car = _step2.value;
              car.address = location.address;
              allCars.push(car);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return allCars;
    },
    sort_car: function sort_car(item, order) {
      var _this = this;

      var target = event.target;
      document.getElementById("navbarDropdown").innerHTML = target.innerHTML;
      this.selectedItem = target.innerHTML;
      target.parentNode.classList.add("active");
      this.sort = item;
      this.order = order;
      this.$axios.get("".concat(this.$carshare, "/cars"), {
        params: {
          sort: item,
          order: order,
          from: this.address
        }
      }).then(function (res) {
        _this.cars = _this.getCarData(res);

        _this.emitCarUpdate(_this.cars);
      })["catch"]();
    },
    search: function search() {
      var _this2 = this;

      this.$axios.get("".concat(this.$carshare, "/cars/search"), {
        params: {
          query: this.searchItem
        }
      }).then(function (res) {
        _this2.cars = res.data.cars;

        _this2.emitCarUpdate(_this2.cars);
      })["catch"]();
    },
    displayAllCars: function displayAllCars() {
      var _this3 = this;

      this.$axios.get("".concat(this.$carshare, "/cars"), {
        params: {
          all: true
        }
      }).then(function (res) {
        //Set all cars to current cars
        _this3.cars = res.data.cars;
        _this3.temp_cars = _this3.cars;

        _this3.emitCarUpdate();
      })["catch"](function () {});
    },
    filterSeats: function filterSeats(number, checked) {
      var cars = this.temp_cars.filter(function (car) {
        return car.seats === number;
      });

      if (checked) {
        this.filtered = this.filtered.concat(cars);
        this.checkedTrack++;
      } else {
        this.checkedTrack--;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = cars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var car = _step3.value;
            var index = this.filtered.indexOf(car);
            this.filtered.splice(index, 1);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    },
    filterBrand: function filterBrand(brand, checked) {
      var cars = this.temp_cars.filter(function (car) {
        return car.brand.toUpperCase() === brand.toUpperCase(); //ignore case
      });

      if (checked) {
        this.checkedTrack++;
        this.filtered = this.filtered.concat(cars); //If checked then concat to array
      } else {
        this.checkedTrack--;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = cars[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var car = _step4.value;
            var index = this.filtered.indexOf(car); //get the filtered car index

            this.filtered.splice(index, 1);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    },
    filterGear: function filterGear(gear, checked) {
      var cars = this.temp_cars.filter(function (car) {
        return car.gear.toUpperCase() === gear.toUpperCase(); //ignore case
      });

      if (checked) {
        this.checkedTrack++;
        this.filtered = this.filtered.concat(cars); //If checked then concat to array
      } else {
        this.checkedTrack--;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = cars[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var car = _step5.value;
            var index = this.filtered.indexOf(car); //get the filtered car index

            this.filtered.splice(index, 1);
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    },
    emitCarUpdate: function emitCarUpdate() {
      this.$emit("onFilter", this.cars);
    }
  }
};
exports["default"] = _default;
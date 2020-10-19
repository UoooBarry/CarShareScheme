/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 27/08/2020
 * Bach Dao, Updated at 25/09/2020*
 * Yongqian Huang updated at: 03/10/2020 rewrite filter   *
 * Yongqian Huang updated at: 06/10/2020 better filter logic   *
 **************************************************/

export default {
  name: "CarMixin",
  data() {
    return {
      sort: "",
      order: "",
      cars: [],
      temp_cars: [], //storing temporary cars
      filtered: [],
      checkedTrack: 0,
      searchItem: "",
      loadingKey: 0,
    };
  },
  watch: {
    filtered(val) {
      //watch when filter changed, change the display cars
      this.cars = val;
    },
    checkedTrack(val){
      if(val <= 0){
        this.$router.go();
      }
    }
  },
  methods: {
    getCarData(res) {//get all car data from the location
        let allCars = [];
        const locations = res.data.locations;
        for (const location of locations) {
          for (const car of location.Cars) {
            car.address = location.address;
            allCars.push(car);
          }
        }
        return allCars;
    },
    sort_car(item, order) {
      const target = event.target;
      document.getElementById("navbarDropdown").innerHTML = target.innerHTML;
      this.selectedItem = target.innerHTML;
      target.parentNode.classList.add("active");
      this.sort = item;
      this.order = order;
      this.$axios
        .get(`${this.$carshare}/cars`, {
          params: {
            sort: item,
            order: order,
            from: this.address,
          },
        })
        .then((res) => {
          this.cars = this.getCarData(res);
          this.update();
        })
        .catch();
    },
    allCar() {
      this.$axios
        .get(`${this.$carshare}/cars`, {
          params: {
            all: true,
          },
        })
        .then((res) => {
          this.cars = res.data.cars;
          this.temp_cars = this.cars;
          this.update();
        })
        .catch();
    },
    search() {
      this.$axios
        .get(`${this.$carshare}/cars/search`, {
          params: {
            query: this.searchItem,
          },
        })
        .then((res) => {
          this.cars = res.data.cars;
          this.update();
        })
        .catch();
    },
    displayAllCars(){
      this.$axios
            .get(`${this.$carshare}/cars`, {
              params: {
                all: true
              }
            })
            .then(res => {
              //Set all cars to current cars
              this.update(res.data.cars);
              this.temp_cars = this.cars;
            })
            .catch((err) => {
              console.log(err)
            });
    },
    filterSeats(number, checked) {
      const cars = this.temp_cars.filter((car) => {
        return car.seats === number;
      });

      if (checked) {
        this.filtered = this.filtered.concat(cars);
        this.checkedTrack++;
      } else {
          this.checkedTrack--;
          for (const car of cars) {
            const index = this.filtered.indexOf(car);
            this.filtered.splice(index, 1);
          }
      }
    },
    filterBrand(brand, checked) {
      const cars = this.temp_cars.filter((car) => {
        return car.brand.toUpperCase() === brand.toUpperCase(); //ignore case
      });
      if (checked) {
        this.checkedTrack++;
        this.filtered = this.filtered.concat(cars); //If checked then concat to array
      } else {
          this.checkedTrack--;
          for (const car of cars) {
            const index = this.filtered.indexOf(car); //get the filtered car index
            this.filtered.splice(index, 1);
          }
        }
    },
    filterGear(gear, checked) {
      const cars = this.temp_cars.filter((car) => {
        return car.gear.toUpperCase() === gear.toUpperCase(); //ignore case
      });
      if (checked) {
        this.checkedTrack++;
        this.filtered = this.filtered.concat(cars); //If checked then concat to array
      } else {
          this.checkedTrack--;
          for (const car of cars) {
            const index = this.filtered.indexOf(car); //get the filtered car index
            this.filtered.splice(index, 1);
          }
      }
    },
    update() {
      this.$emit("onFilter", this.cars);
    },
  }
};

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
      searchItem: "",
      loadingKey: 0
    };
  },
  watch:{
    filtered(val) { //watch when filter changed, change the display cars
      this.cars = val;
    }
  },
  methods: {
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
        .catch((err) => console.log(err));
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
        .catch((err) => console.log(err));
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
        .catch((err) => console.log(err));
    },
    filterSeats(number,checked) {
      const cars = this.temp_cars.filter((car) => {
        return car.seats === number
      });
      if(checked){
        this.filtered = this.filtered.concat(cars); //If checked then concat to array
      }else{
        for(const car of cars){
          const index = this.filtered.indexOf(car); //get the filtered car index
          this.filtered.splice(index,1)
        }
      }
      this.loadingKey ++;
    },
    filterBrand(brand,checked) {
      const cars = this.temp_cars.filter((car) => {
        return car.brand.toUpperCase() === brand.toUpperCase(); //ignore case
      });
      if(checked){
        this.filtered = this.filtered.concat(cars); //If checked then concat to array
      }else{
        for(const car of cars){
          const index = this.filtered.indexOf(car); //get the filtered car index
          this.filtered.splice(index,1)
        }
      }
      this.loadingKey ++;
    },
    filterGear(gear,checked) {
      const cars = this.temp_cars.filter((car) => {
        return car.gear.toUpperCase() === gear.toUpperCase(); //ignore case
      });
      if(checked){
        this.filtered = this.filtered.concat(cars); //If checked then concat to array
      }else{
        for(const car of cars){
          const index = this.filtered.indexOf(car); //get the filtered car index
          this.filtered.splice(index,1)
        }
      }
      this.loadingKey ++;
    },
    update() {
      this.$emit("onFilter", this.cars);
    },
  },
};

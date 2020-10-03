/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 27/08/2020
 * Bach Dao, Updated at 25/09/2020*
 * Yongqian Huang updated at: 03/10/2020 rewrite filter   *
 **************************************************/

export default {
  name: "CarMixin",
  data() {
    return {
      sort: "",
      order: "",
      cars: [],
      searchItem: "",
      loadingKey: 0
    };
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
    filterSeats(number) {
      this.cars = this.cars.filter((car) => {
        return car.seats === number
      });
      this.loadingKey ++;
    },
    filterBrand(brand) {
      this.cars = this.cars.filter((car) => {
        return car.brand.toUpperCase() === brand.toUpperCase(); //ignore case
      });
      this.loadingKey ++;
    },
    filterGear(gear) {
      this.cars = this.cars.filter((car) => {
        return car.gear.toUpperCase() === gear.toUpperCase(); //ignore case
      });
      this.loadingKey ++;
    },
    update() {
      this.$emit("onFilter", this.cars);
    },
  },
};

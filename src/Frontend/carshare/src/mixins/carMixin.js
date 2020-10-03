/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 27/08/2020
 * Bach Dao, Updated at 25/09/2020*
 **************************************************/

export default {
  name: "CarMixin",
  data() {
    return {
      sort: "",
      order: "",
      cars: [],
      searchItem: "",
    };
  },
  methods: {
    filter(item, order) {
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
    filterSeat() {
      this.$axios
        .get(`${this.$carshare}/cars/filter/seat`, {
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
    update() {
      this.$emit("onFilter", this.cars);
    },
  },
};

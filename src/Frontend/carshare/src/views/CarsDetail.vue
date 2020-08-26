<template>
  <div>
    <Loading />
    <h4>SHOWING CAR LIST RESULT</h4>
    <CarFilterHeader v-bind:cars="this.cars" @click.native="filter" />
    <CarList v-bind:cars="cars" />
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import CarFilterHeader from "@/components/layouts/CarFilterHeader.vue";
import CarList from "@/components/cars/CarList.vue";
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "Cars",
  components: {
    Loading,
    CarFilterHeader,
    CarList
  },
  mixins: [authorizeMixin],
  data() {
    return {
      cars: [],
      sort: "name",
      order: "ASC"
    };
  },
  methods: {
    async filter() {
      var radios = document.getElementsByName("sort");
      var i = 0;
      console.log(radios);
      while ( i < radios.length) {
        if (radios[i].checked) {
          if ((i === 0)) {
            this.sort = "name";
            this.order = "ASC";
          }
          else if ((i === 1)) {
            this.sort = "price";
            this.order = "DESC";
          } else if ((i === 2)) {
            this.sort = "price";
            this.order = "ASC";
          }else if ((i === 3)) {
            this.sort = "purchase_date";
            this.order = "DESC";
          }else if ((i === 4)) {
            this.sort = "brand";
            this.order = "ASC";
          }else if ((i === 5)) {
            this.sort = "view";
            this.order = "DESC";
          }
        }
        i++;
      }
      const response = await this.$axios.get(
        `${this.$carshare}/cars/?sort=${this.sort}&order=${this.order}`,
        {
          headers: this.header
        }
      );
      this.cars = response.data.cars;
    }
  },
  async created() {
    const response = await this.$axios.get(
      `${this.$carshare}/cars/?sort=${this.sort}&order=${this.order}`,
      {
        headers: this.header
      }
    );
    this.cars = response.data.cars;
  }
};
</script>


<style>
body {
  background-color: #f0f8ff;
}
.main {
  min-height: 600px;
}
</style>  
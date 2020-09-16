/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 24/08/2020                *
 ***********************************************************************/
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Filter:</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#carnav"
        aria-controls="carnav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="carnav">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item dropdown">
            <label class="btn btn-outline-dark">
              <a
                class="nav-link dropdown-toggle"
                style="padding: 0;"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Filter</a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item activate" @click="filter('name','ASC')">Default (By range)</a>
                <a class="dropdown-item" @click="filter('price','ASC')">By price low</a>
                <a class="dropdown-item" @click="filter('price','DESC')">By price high</a>
                <a class="dropdown-item" @click="filter('createdAt','DESC')">By latest</a>
                <a class="dropdown-item" @click="filter('brand','ASC')">By brand</a>
                <a class="dropdown-item" @click="filter('viewed','DESC')">By popular</a>
              </div>
            </label>
          </li>

          <li class="nav-item">
            <label class="btn btn-outline-dark">
              <input type="radio" name="sort" value="all" @click="allCar" /> All cars
            </label>
          </li>
          <LocationFilter :address="address" v-on:onAddressChange="changeAddress" />
          <div class="col-sm-3.5 my-1 btn" style="float: right;">
          <form class="form-submit" style="" @submit.prevent="search">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              v-model="searchItem"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              v-on:click="update"
            >Search</button>
          </form>
          </div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import LocationFilter from "@/components/cars/LocaltionFilter";
import CarMixin from "@/mixins/carMixin";
export default {
  name: "CarFilterHeader",
  mixins: [CarMixin],
  props: ["address"],
  components: {
    LocationFilter
  },
  methods: {
    changeAddress(address) {
      this.$emit("onAddressChange", address);
    }
  }
};
</script>


<style scoped>
.form-submit{
  display: flex;
  align-items: center;
}
.navbar {
  width: 95%;
  border-top: 1px solid #a9a0a0;
  border-bottom: 1px solid #a9a0a0;
  margin-bottom: 20px;
}
.btn-outline-success {
  color: black;
  border-color: #a9a0a0;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}

.btn-outline-success:activate {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}

.nav-item {
  margin-left: 20px;
}
.btn-outline-dark {
  border: none;
  margin: 10px;
}
.btn {
  border-radius: 0;
}
.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}

.btn-outline-dark.active {
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}

.btn-outline-dark.active a {
  color: #fff !important;
}
.dropdown-item {
  cursor: pointer;
}

input[type="radio"] {
  display: none;
}
.mr-sm-2 {
  width: 70%;
  border-radius: 0;
}

</style>
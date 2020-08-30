<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      Filter:
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="row" style="margin-left: 10px;">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div class="col-5">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-outline-dark">
                  <input
                    type="radio"
                    name="sort"
                    checked
                    value="default"
                    @click="filter('name','ASC')"
                  /> Default (By range)
                </label>

                <div class="dropdown show">
                  <a
                    class="btn btn-outline-dark"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >By Price</a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" @click="filter('price','ASC')">From Low</a>
                    <a class="dropdown-item" @click="filter('price','DESC')">From High</a>
                  </div>
                </div>

                <label class="btn btn-outline-dark">
                  <input
                    type="radio"
                    name="sort"
                    autocomplete="off"
                    @click="filter('createdAt','DESC')"
                  /> By Newest
                </label>

                <label class="btn btn-outline-dark">
                  <input
                    type="radio"
                    name="sort"
                    autocomplete="off"
                    @click="filter('brand','DESC')"
                  /> By Brand
                </label>

                <label class="btn btn-outline-dark">
                  <input
                    type="radio"
                    name="sort"
                    autocomplete="off"
                    @click="filter('viewed','DESC');"
                  /> By popular
                </label>
              </div>
            </ul>
          </div>
          <div class="col-5">
            <LocationFilter :address="address" v-on:onAddressChange="changeAddress" />
          </div>
          <div class="col-4" style="padding-left:25px">
            <form class="form-inline my-2 my-lg-0" @submit.prevent="search">
      
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                v-model="searchItem"
                style="width:300px"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                v-on:click="update"
              >Search</button>
            
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
.navbar-collapse{

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
.dropdown-item {
  cursor: pointer;
}
</style>
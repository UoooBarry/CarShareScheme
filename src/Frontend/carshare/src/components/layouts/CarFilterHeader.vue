/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 24/08/2020                *
 ***********************************************************************/
<template>
  <div>
    <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="inner_section_label">SORT BY</a>            
            <label class="btn btn-outline-dark">
              <a
                class="dropdown-toggle inner_section"
                style="padding: 0;"
                role="button"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{ selectedItem }}</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown" style="margin-left: 100px">
                <a class="dropdown-item" @click="filter('name','ASC')">Default (By range)</a>
                <a class="dropdown-item" @click="filter('price','ASC')">By price low</a>
                <a class="dropdown-item" @click="filter('price','DESC')">By price high</a>
                <a class="dropdown-item" @click="filter('createdAt','DESC')">By latest</a>
                <a class="dropdown-item" @click="filter('brand','ASC')">By brand</a>
                <a class="dropdown-item" @click="filter('viewed','DESC')">By popular</a>
              </div>
            </label>
          </li>
        </ul>
            <!-- <label class="btn" style="margin: 10px;">
              <a @click="allCar">All cars</a>
            </label> -->
            <!-- <div class="search" style="display: flex"> -->
              <LocationFilter :address="address" v-on:onAddressChange="changeAddress" />

          
              <form class="form-inline" style="float:right;" @submit.prevent="search">
              <input
                class="form-control input-1"
                type="search"
                placeholder="Search"
                v-model="searchItem"
              />
              <button class="btn btn-outline-success" type="submit" v-on:click="update">Search</button>
            </form>
        <!-- </div> -->
        
            
            
        
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
  data(){
    return{
      selectedItem: 'Default (By range)'
    }
  },
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
.btn-outline-success:hover,
.btn-outline-success:active,
.btn-outline-success:focus {
  color: #fff !important;
  background-color: #a9a0a0 !important;
  border-color: #a9a0a0 !important;
  box-shadow: none !important;
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
.input-1 {
  width: 250px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.inner_section{
    appearance: none;
    font-family: AvenirLTStd-Black;
    text-transform: uppercase;
    background-color: transparent;
    outline: none;
    border: 0;
    padding-right: 24px;
        font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
}
.inner_section_label{
    position: relative;
    width: auto;
    display: inline-block;
    font-family: AvenirLTStd-Book,Arial,sans-serif;
    text-align: left;
    background-color: transparent;
    font-size: 1rem;
}
</style>
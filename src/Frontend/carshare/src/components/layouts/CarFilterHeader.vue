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

      <div class="collapse navbar-collapse btn-group" id="carnav">
        <ul class="navbar-nav mr-auto">
          
            <li  class="nav-item">
              <!-- <label class="btn btn-outline-dark">
                <a class='nav-link'  @click="filter('name','ASC')" >  Default (By range) </a>
              </label> -->
              <label class="btn btn-outline-dark">
                <input type="radio" name="sort" checked value="default" @click="filter('name','ASC')" /> Default (By range)
              </label>
            </li>
            
            <li  class="nav-item dropdown">
              <label class="btn btn-outline-dark">
                <a class="nav-link dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">By Price</a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" @click="filter('price','ASC')">From Low</a>
                  <a class="dropdown-item" @click="filter('price','DESC')">From High</a>
                </div>
              </label>
            </li>

            <li  class="nav-item">
              <!-- <label class="btn btn-outline-dark">
                <a @click="filter('createdAt','DESC')"  class='nav-link'>By Newest</a>
              </label> -->
              <label class="btn btn-outline-dark">
                <input type="radio" name="sort" autocomplete="off" @click="filter('createdAt','DESC')" /> By Newest
              </label>
            </li>
            
            <li class="nav-item">
              <!-- <label class="btn btn-outline-dark">
                <a  @click="filter('brand','DESC')" class='nav-link'>By Brand</a>
              </label> -->
              <label class="btn btn-outline-dark">
                <input type="radio" name="sort" autocomplete="off" @click="filter('brand','DESC')" /> By Brand
              </label>
            </li>
            
            <li class="nav-item">
              <!-- <label class="btn btn-outline-dark">
                <a @click="filter('viewed','DESC')"  class='nav-link'>By popular</a>
              </label> -->
              <label class="btn btn-outline-dark">
               <input type="radio" name="sort" autocomplete="off" @click="filter('viewed','DESC');" /> By popular
              </label>
            </li>

            <li class="nav-item">
              <!-- <label class="btn btn-outline-dark" id="allcars">
                <a class='nav-link'  @click="allCar">All cars</a>
              </label> -->
              <label class="btn btn-outline-dark">
                <input type="radio" name="sort" value="default" @click="allCar" /> All cars
              </label>
            </li>
            <LocationFilter :address="address" v-on:onAddressChange="changeAddress" />
        </ul>
                    
        
           
        <form class="form-inline my-2 my-lg-0"  @submit.prevent="search">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="searchItem" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  v-on:click="update">Search</button>
        </form>

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

.btn-outline-dark.active{
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}

.btn-outline-dark.active a{
  color: #fff !important;
}
.dropdown-item {
  cursor: pointer;
}
</style>
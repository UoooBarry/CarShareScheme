/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 24/08/2020
            Yongqian Huang updated at: 25/08/2020 Shorten code with better filter method                *
               Yongqian Huang updated at: 19/10/2020 display all cars   *
 ***********************************************************************/
<template>
  <div>
    <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
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
        <ul class="navbar-nav mx-auto">
          <LocationFilter :address="address" v-on:onAddressChange="changeAddress" />
          <li class="nav-item my-1 btn">
            <form class="form-inline" style="float:right;" @submit.prevent="search">
              <input
                class="form-control input-1"
                type="search"
                :placeholder="$t('search')"
                v-model="searchItem"
              />
              <button class="btn btn-outline-success" type="submit" >{{ $t('search') }}</button>
            </form>
          </li>
          <li class="nav-item dropdown">
            <a class="inner_section_label">{{ $t('sortBy') }}</a>
            <label class="btn btn-outline-custom">
              <a
                class="dropdown-toggle inner_section"
                style="padding: 0;"
                role="button"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{ $t('byRange') }}</a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style="margin-left: 100px"
              >
                <a class="dropdown-item" @click="sort_car('name','ASC')">{{ $t('byRange') }}</a>
                <a class="dropdown-item" @click="sort_car('price','ASC')">{{ $t('byPriceLow') }}</a>
                <a class="dropdown-item" @click="sort_car('price','DESC')">{{ $t('byPriceHigh') }}</a>
                <a class="dropdown-item" @click="sort_car('createdAt','DESC')">{{ $t('byLatest') }}</a>
                <a class="dropdown-item" @click="sort_car('brand','ASC')">{{ $t('byBrand') }}</a>
                <a class="dropdown-item" @click="sort_car('viewed','DESC')">{{ $t('byPopular') }}</a>
              </div>
            </label>
          </li>
          <li>
            <font-awesome-icon icon="border-all" id="list1" class="display-style" v-on:click.prevent="cardToggle($event)" title="Display in card style" />
            <font-awesome-icon icon="bars" id="list2" class="display-style" v-on:click.prevent="cardToggle($event)" title="Display in row style"/>
            <font-awesome-icon icon="globe-americas" id="list3" v-on:click.prevent="displayAllCars($event)" class="display-style" style="color: #6c757d" title="Show all cars"/>
          </li>
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
  data() {
    return {
      cardStyle : true,
      displayAll: false
    };
  },
  components: {
    LocationFilter
  },
  methods: {
    changeAddress(address) {
      this.$emit("onAddressChange", address);
    },
    cardToggle(event) {
      if (event.currentTarget.id === "list1") {
        this.$emit("updateStyle", 1);
      } else{
        this.$emit("updateStyle", 2);
      }
    },
    displayAllCars(event){
      if(!this.displayAll){
        event.target.style.color = 'black';
        this.$emit("displayAllCars", true);
        this.displayAll = true;
      }else{
        this.$router.go();
      }
    }
  }
};
</script>


<style scoped>
.navbar {
  width: 95%;
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
.btn-outline-custom {
  border: none;
  margin: 10px;
}
.display-style {
  font-size: 20px;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
}
.btn {
  border-radius: 0;
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
.inner_section {
  appearance: none;
  text-transform: uppercase;
  background-color: transparent;
  outline: none;
  border: 0;
  padding-right: 24px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
}
.inner_section_label {
  position: relative;
  width: auto;
  display: inline-block;
  text-align: left;
  background-color: transparent;
  font-size: 1rem;
}
#navbarDropdown:hover{
  color: black !important;
}
</style>
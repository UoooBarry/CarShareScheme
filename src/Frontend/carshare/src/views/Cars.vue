 /***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 23/09/2020                  *
 *   Bach Dao, Updated AT: 24/08/2020      sorting                      *
 *   Bach Dao, Updated AT: 25/08/2020      navigation layout            *
 *   Bach Dao, Updated AT: 27/08/2020      tool tips                    *  
 *Yongqian Huang updated at 27/08/2020 Add location check to display cars*
 ***********************************************************************/
<template>
  <div>
    <Loading :key="loadingKey" />

    <dir class="sub-header">
      <h1>{{ $t('carListMsg') }}</h1>
    </dir>

    <div class="row">
      <div class="filter-col">
        <CarFilter />
      </div>

      <div class="car-list-col">
        <CarFilterHeader
          v-on:onFilter="update"
          :address="address"
          :card="card"
          v-on:onAddressChange="changeAddress"
          v-on:updateStyle="displayStyle"
        />
        <CarList id="car-list-style" v-bind:cars="cars" />
        <CarRow id="car-row-style" v-bind:cars="cars" />
      </div>
    </div>
  </div>
</template>

<script>
import CarMixin from "@/mixins/carMixin";
import Loading from "@/components/Loading";
import CarFilterHeader from "@/components/layouts/CarFilterHeader.vue";
import CarList from "@/components/cars/card_style/CarCardList.vue";
import CarFilter from "@/components/cars/CarFilter.vue";
import CarRow from "@/components/cars/row_style/CarRowList.vue";
export default {
  name: "Cars",
  mixins: [CarMixin],
  data() {
    return {
      cars: [],
      address: "",
      loadingKey: 0,
      card: 1
    };
  },
  mounted() {
    if (sessionStorage.style == 1) {
      this.listStyle();
    } else {
      this.rowStyle();
    }
  },
  created() {
    navigator.geolocation.getCurrentPosition(position => {
      //Get user address by using gooogle map api with a cors anywhere proxy
      this.$axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              latlng: `${position.coords.latitude},${position.coords.longitude}`,
              key: this.$google_api_key
            }
          }
        )
        .then(res => {
          //Get the first result as formatted_address
          this.address = res.data.results[0].formatted_address;
          //Send request to backend get all avalible cars
          this.$axios
            .get(`${this.$carshare}/cars`, {
              params: {
                from: this.address
              }
            })
            .then(res => {
              //If no car fond, display a message
              if (res.data.locations.length === 0) {
                this.flashMessage.warning({
                  title: "Not found cars",
                  message:
                    "No cars in that location can be found, please re-enter a location"
                });
              }
              //Set cars
              this.cars = this.getCarData(res);
            })
            .catch(err => {
              console.log(err);
            });
        });
    });
  },
  components: {
    Loading,
    CarFilterHeader,
    CarList,
    CarFilter,
    CarRow
  },
  methods: {
    update(cars) {
      this.cars = cars;
      this.loadingKey++;
    },
    displayStyle(card) {
      this.card = card;
      sessionStorage.style = this.card;
      if (sessionStorage.style == 1) {
        this.listStyle();
      } else {
        this.rowStyle();
      }
    },
    //Change address, resend request
    listStyle() {
      document.getElementById("car-list-style").style.display = "block";
      document.getElementById("car-row-style").style.display = "none";
      document.getElementById("list1").style.color = "black";
      document.getElementById("list2").style.color = "#6c757d";
    },
    rowStyle() {
      document.getElementById("car-row-style").style.display = "block";
      document.getElementById("car-list-style").style.display = "none";
      document.getElementById("list1").style.color = "#6c757d";
      document.getElementById("list2").style.color = "black";
    },
    changeAddress(address) {
      this.address = address;
      this.$axios
        .get(`${this.$carshare}/cars`, {
          params: {
            from: address
          }
        })
        .then(res => {
          //No car fond
          if (res.data.locations.length === 0) {
            this.flashMessage.warning({
              title: "Not found cars",
              message:
                "No cars in that location can be found, please re-enter a location"
            });
            this.loadingKey++;
          }
          //Update cars
          this.cars = this.getCarData(res);
        })
        .catch(err => console.log(err));
    }
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

.filter-col {
  width: 20%;
  margin: 20px;
}
.car-list-col {
  width: 70%;
}

@media only screen and (max-width: 414px) {
  .filter-col {
    display: none;
  }
  .car-list-col {
    width: 100%;
  }
}
</style>  
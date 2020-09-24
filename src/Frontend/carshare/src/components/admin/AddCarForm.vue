/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 24/08/2020                *
 ***********************************************************************/
<template>
  <div>
    <h1>Add a new car</h1>
    <form @submit.prevent="addNewCar">
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Car Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="name" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Brand</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" v-model="brand" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Model</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" v-model="model" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Purchase Date</label>
        <div class="col-sm-10">
          <input type="date" class="form-control" id="inputPassword" v-model="purchase_date" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Location</label>
        <div class="col-sm-10">
          <select class="form-control" v-model="location_id">
            <option
              v-for="location in locations"
              v-bind:key="location.id"
              :value="location.id"
            >@{{ location.name }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Seats</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" v-model="seats" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Luggages</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" v-model="luggages" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Doors</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" v-model="doors" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Gear</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" v-model="gear" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">
          <input type="number" step="0.01" class="form-control" id="inputPassword" v-model="price" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Features</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" v-model="addons" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="description"
          ></textarea>
        </div>
      </div>
      <div class="form-group row">
        <input type="submit" class="btn btn-primary form-control submit-car" value="ADD" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCarForm",
  components: {},
  props: ["locations"],
  data() {
    return {
      name: "",
      brand: "",
      model: "",
      location_id: "",
      purchase_date: "",
      price: "",
      seats: "",
      luggages: "",
      doors: "",
      gear: "",
      addons: "",
      description: ""
    };
  },
  methods: {
    async addNewCar() {
      console.log(this.header);
      this.$axios
        .post(
          `${this.$carshare}/cars/create`,
          {
            name: this.name,
            brand: this.brand,
            model: this.model,
            location_id: this.location_id,
            purchase_date: this.purchase_date,
            price: this.price,
            seats: this.seats,
            luggages: this.seats,
            doors: this.doors,
            gear: this.gear,
            addons: this.addons,
            description: this.description
          },
          { headers: this.header }
        )
        .then(res => {
          if (res.data.message == "fail") {
            res.data.errors.forEach(error => {
              this.flashMessage.error({
                title: "Register detail",
                message: error
              });
            });
            return;
          }
          console.log("step 1");
          this.flashMessage.success({
            title: "Register success!",
            message: "Register successfully!"
          });
        })
        .catch(err => console.log(err));
      console.log("error");
    }
  }
};
</script>


<style>
.submit-car {
  width: 45%;
  margin-left: 50px;
}
header#header {
  display: none !important;
}
#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>
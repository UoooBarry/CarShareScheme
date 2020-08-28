<template>
  <div>
    <h1>Add a new car</h1>
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Car Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Brand</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Model</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Location</label>
        <div class="col-sm-10">
          <!-- <input type="text" class="form-control" id="inputPassword" /> -->
          <select >
            <option v-for="location in locations" v-bind:key="location.id">@{{ location.name }}</option>
          </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Seats</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Luggages</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Doors</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Gear</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Features</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCarForm",
  components: {},
  props: ["locations"]
};
</script>


<style>
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
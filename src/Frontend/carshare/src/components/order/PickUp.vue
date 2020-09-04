<template>
  <div>
    <div class="card border-0">
      <div class="card-header card-2">
        <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">PICK UP INFORMATION </p>
      </div>
    </div>
    <div class="location-form">
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label font-weight-bold">Location</label>
        <div class="col-sm-10">
          <input type="text" v-model="location.name" class="form-control" readonly/>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label font-weight-bold">Time</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pickup",
  components: {},
  props: ["location"],
  data() {
    return {
    };
  },
  mounted() {
  }
};
</script>


<style scoped>
.location-form{
  width: 80%;
  margin: 50px 0 0 50px;
}
</style>  
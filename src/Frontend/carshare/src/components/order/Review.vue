<template>
  <div class="card border-0">
    <div class="card-header card-2">
      <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">YOUR ORDER</p>
    </div>

    <div class="card-body pt-0">
      <div class="row justify-content-between item">
        <img
          class="img-fluid"
          :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id"
        />

        <div class="col-auto review-right">
          <p class="mb-0" style="font-size:30px">
            <b>{{car.model}}</b>
          </p>
          <small class="text-muted" style="font-size:24px">{{car.brand}}</small>
         
          <div class="date-input-group">
            <p>
              <b>Start from</b>
              <input
                id="startFrom"
                v-on:change.prevent="setStartFrom"
                v-model="start_from"
                type="date"
              />
            </p>

            <p>
              <b>Rent for</b>
              <input
                type="number"
                v-model="day"
                v-on:change.prevent="setPeriod"
                id="day"
                name="day"
                min="1"
              />
              <b>Days</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <button
      id="btn-progress"
      type="button"
      class="btn btn-next customize-button"
      @click="nextStep()"
    >Next</button>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: ["car"],
  components: {},
  data() {
    return {
      day: 1,
      start_from: new Date().toISOString().substring(0, 10)
    };
  },
  methods: {
    nextStep() {
      this.$emit("nextStep");
    },
    setPeriod() {
      this.day = document.getElementById("day").value;
      this.$emit("update-day", this.day);
    },
    setStartFrom() {
      this.$emit("update-start", this.start_from);
    }
  }
};
</script>


<style scoped>
.img-fluid {
  margin: 0;
  width: 55%;
}
.card-header,
.card {
  background-color: #f8f8f8;
}
.card-header {
  margin-bottom: 30px;
}

#day {
  width: 50px;
  text-align: center;
  margin: 0 10px;
}
#startFrom {
  width: 155px;
}
.date-input-group {
  font-size: 18px;
  padding-top: 5px;
  margin-top:20px
}
.review-right {
  float: right;
  margin-top: 60px;
}
</style>  
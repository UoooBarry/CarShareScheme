<template>
  <div class="card border-0">
    <div class="card-header card-2">
      <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">YOUR ORDER</p>
    </div>
    <div class="card-body pt-0">
      <div class="row justify-content-between item">
        <div class="col-auto col-md-7">
          <div class="media flex-column flex-sm-row">
            <img
              class="img-fluid"
              :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id"
            />
            <div class="media-body my-auto" style="margin-left:30px">
              <div class="row">
                <div class="col-auto">
                  <p class="mb-0" style="font-size:30px">
                    <b>{{car.model}}</b>
                  </p>
                  <small class="text-muted" style="font-size:24px">{{car.brand}}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pl-0 flex-sm-col col-auto my-auto">
          <p style="font-size:18px">
            <b>Start from:</b><input id='startFrom' v-on:change.prevent="setStartFrom" v-model="start_from" type="date">
          </p>
          


          <p style="font-size:20px">
              <input type="number" v-model="day" v-on:change.prevent="setPeriod" id="day" name="day" min="1" >
            <b>Days</b>
          </p>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <button id="btn-progress" type="button" class="btn btn-next customize-button" @click='nextStep()' >Next</button>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: ['car'],
  components: {},
  data() {
    return {
      day: 1,
      start_from: new Date().toISOString().substring(0, 10)
    };
  },
  methods: {
    nextStep(){
      this.$emit('nextStep');
    },
    setPeriod() {
      this.day = document.getElementById('day').value;
      this.$emit("update-day", this.day);
    },
    setStartFrom(){
      this.$emit("update-start", this.start_from);
    }
  }
};
</script>


<style scoped>
.img-fluid {
  margin: 0;
  width: 80%;
  height: 80%;
}
.card-body {
  background-color: #F8F8F8;
}
.item {
  margin-top: 30px;
}
#day{
  width:100px;
  text-align: center;
  margin-right: 20px;
}
</style>  
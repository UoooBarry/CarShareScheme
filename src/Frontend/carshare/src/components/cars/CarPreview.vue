/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 24/08/2020                *
 ***********************************************************************/
<template>
  <div class="tip">
    <div class="tip-header">{{car.name}}</div>
    <div class="row">Car brand: {{car.brand}}</div>
    <div class="row">Car model: {{car.model}}</div>
    <div class="row">Bought in: {{car.purchase_date | formatDate}}</div>
    <div class="row">Car features:</div>
    <div class v-for="value in splitedFeatures()" v-bind:key="value.index">
      <div class="feature row">
        <font-awesome-icon icon="star" style="margin-right: 8px; " />
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarPreview",
  props: ["car"],
  methods: {
    splitedFeatures() {
      let newArr = [];
      newArr = this.car.addons.split(",");
      return newArr;
    }
  }
};
</script>

<style scoped>
.tip-header{
    padding:10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: 0;
    font-weight: bold;
    color: white;
    background: linear-gradient(to right,  #8f8787 0%, #dfdad3 100%);
}
.tip {
  min-width: 250px;
  display: block;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  margin-left: 25px;
  margin-top: 20px;
  z-index: 1000;
  overflow: visible;
  padding-bottom: 10px ;
}
.row {
  margin-left: 30px;
}
.feature{
   margin-left: 50px; 
}
</style>
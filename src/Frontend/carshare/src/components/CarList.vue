<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="hover-info" v-on:mousemove="fn">
        <img class="card-img-top" src="../../public/img/defaultcar.png" alt="Card image cap" />
        <span class="hover-info-tip">{{car.name}}</span>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{car.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{car.brand}}</h6>
        <p class="card-text">The car is {{car.model}} model which bought in {{car.purchase_date}}</p>
        <a href="#" class="btn btn-primary">Get now</a>
      </div>
    </div>
  </div>
</template>

<script>


import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "CarList",
  mixins: [authorizeMixin],
  props: ["car"],
  methods: {
   fn(event) {
      var tooltip = document.querySelectorAll(".hover-info-tip");
      var img = document.querySelectorAll(".card-img-top");
      
      for (var i = 0; i < tooltip.length; i++ ) {
        tooltip[i].style.left = (event.clientX - img[i].width + 200) + "px";
        tooltip[i].style.top = (event.clientY - img[i].height)  + "px";
      }
    }
  }
};
</script>

<style scoped>
.card-img-top {
  margin-top: 0;
}

.hover-info:hover .hover-info-tip {
  display: block;
}

.hover-info-tip {
  display: none;
  margin-left: 28px;
  padding: 10px;
  position: absolute;
  z-index: 1000;
  width: 200px;
  height: 300px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
}


</style>
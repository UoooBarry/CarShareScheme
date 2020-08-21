<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="../../public/img/defaultcar.png" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{car.name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{car.brand}}</h6>
      <p
        class="card-text"
      >The car is {{car.model}} model which bought in {{car.purchase_date}}</p>
      <a href="#" class="btn btn-primary">Get now</a>
    </div>
  </div>
  
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";

export default {
  name: "CarList",
  mixins: [authorizeMixin],
  props: ["car"],
  methods: {}
};
</script>

<style scoped>
.card-img-top{
    margin-top: 0;
}
</style>
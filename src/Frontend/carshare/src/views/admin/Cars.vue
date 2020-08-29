<template>
  <div>
    <div class="container">
      <CarList v-bind:cars="this.cars" class='user-list'/>
    </div>
  </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
    name: "AdminCars",
    mixins: [authorizeMixin],
    data() {
        return {
            cars: []
        }
    }
}
</script>
<template>
  <div>
    <div>
      <CarList v-bind:cars="this.cars"/>
    </div>
  </div>
</template>

<script>
import CarList from "@/components/admin/Car/CarList"
import authorizeMixin from "@/mixins/authorizeMixin";

export default {
    name: "AdminCars",
    mixins: [authorizeMixin],
    components:{
        CarList
    },
    data() {
        return {
            cars: []
        }
    },
    created(){
        this.$axios.get(`${this.$carshare}/cars?all=true`)
                    .then((res) => {
                        this.cars = res.data.cars;
                    })
    }
}
</script>
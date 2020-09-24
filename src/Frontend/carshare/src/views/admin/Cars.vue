<!-- @Author Yongqian Huang created at 24/09/2020 -->
<template>
  <div class='admin-main'>
    <div>
      <CarList v-bind:cars="this.cars"/>
    </div>
  </div>
</template>

<script>
import CarList from "@/components/admin/CarList"

export default {
    name: "AdminCars",
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
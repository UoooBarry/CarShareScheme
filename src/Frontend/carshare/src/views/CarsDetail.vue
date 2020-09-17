/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 03/09/2020                 *
 *   Bach Dao, Updated AT: 04/08/2020      added 2 components          *
 *   Bach Dao, Updated AT: 04/08/2020      description for car         *
 ***********************************************************************/
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg car-description">
        <CarDescription :car="car" />
      </div>
      <!-- <div class="col"></div> -->
      <div class="col">
          <CarContent :car="car" />
      </div>
    </div>
     
    <BackToTop />
  </div>
  
</template>

<script>
import BackToTop from "@/components/BackToTop";
import CarContent from "@/components/cars/CarContent";
import CarDescription from "@/components/cars/CarDescription";
export default {
  name: "CarDetail",
  components: {
    CarContent,
    CarDescription,
    BackToTop
  },
  data() {
    return {
      car: ""
    };
  },
  created() {
    this.$axios
      .get(`${this.$carshare}/cars/${this.$route.params.id}`)
      .then(res => {
        this.car = res.data.car;
      })
      .catch(() => {
        this.flashMessage.error({
          title: "Fail",
          message: "Get car data incorrectly!"
        });
        this.$router.push({ name: "Cars" });
      });
  },
  mounted() {
 
  }
};
</script>


<style scoped>

@media only screen and (min-width: 600px) {
  .car-description  {
    margin-right: 200px;
  }
}
</style>  
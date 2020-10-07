/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 03/09/2020                 *
 *   Bach Dao, Updated AT: 04/08/2020      added 2 components          *
 *   Bach Dao, Updated AT: 04/08/2020      description for car         *
 * Yongqian Huang 1/10/2020 Add comment test            
  Bach Dao updated 2/10/2020 add comment new view               *
 ***********************************************************************/
<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-md car-description">
        <CarDescription :car="car" />
      </div>
      <!-- <div class="col"></div> -->
      <div class="col-md car-content">
        <CarContent :car="car" />
        <CommentList :comments="car.Comments" :key="car.Comments.length" v-if="car.Comments" />
      </div>
    </div>

    <BackToTop />
  </div>
</template>

<script>
import BackToTop from "@/components/BackToTop";
import CarContent from "@/components/cars/car_detail/CarContent";
import CarDescription from "@/components/cars/car_detail/CarDescription";
import CommentList from "@/components/comment/CommentList";
export default {
  name: "CarDetail",
  components: {
    CarContent,
    CarDescription,
    CommentList,
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
  mounted() {}
};
</script>


<style scoped>
.container {
  max-width: 80%;
}

@media only screen and (max-width: 600px) {
  .container {
    overflow-y: auto;
    overflow-wrap: break-word;
  }
}
</style>  
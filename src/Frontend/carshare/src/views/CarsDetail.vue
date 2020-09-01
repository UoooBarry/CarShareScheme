<template>
  <div class="container">
    <div class="row">
      <div class="col-lg car-description">
        <CarDescription :car="car" :popular="$route.params.popular" />
      </div>
      <div class="col-md">
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
      })
  }
};
</script>


<style scoped>
.container {
  min-width: 1200px;
}
.row {
  min-height: 800px;
}
.car-description {
  margin-right: 200px;
}
</style>  
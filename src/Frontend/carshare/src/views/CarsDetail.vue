<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="product-image">
          <img src="../../public/img/elephant.jpg" alt="">
        </div>
      </div>
      <div class="col">
        <ProductContent :car="car" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductContent from '@/components/cars/ProductContent';
export default {
  name: "CarDetail",
  components: {
    ProductContent
  },
  data(){
    return{
      car: ''
    }
  },
  created(){
    this.$axios.get(`${this.$carshare}/cars/${this.$route.params.id}`)
              .then((res) => {
                this.car = res.data.car;
              })
              .catch(() => {
                this.flashMessage.error({
                  title: 'Fail',
                  message: 'Get car data incorrectly!'
                });
                this.$router.push({name: 'Cars'});
              })
  }
}
</script>


<style scoped>
.row{
  min-height: 800px;
}
.product-image{
  @media (min-width: 1024px)
  .single-product__content__image {
      width: 60%;
      float: left;
      padding-top: 60%;
      padding-right: 40px;
  }
}
</style>  
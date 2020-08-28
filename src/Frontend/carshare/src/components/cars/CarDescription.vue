<template>
  <div>
    <div class="product-image">
      <img src="../../../public/img/defaultcar.png" alt />
      
        <b class="description">{{ car.description }}</b>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CarDescription",
  props: ["car"]
};
</script>

<style scoped>
.product-image img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin-top: 50px;
}
.description {
  font-size: 24px;
  color: #828282;
}
</style>
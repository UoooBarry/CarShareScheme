<template>
  <div>
    <div class="product-image">
      <img :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id" alt="Avatar" />
      
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
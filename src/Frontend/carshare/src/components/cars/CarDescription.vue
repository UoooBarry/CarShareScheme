<template>
  <div>
    <div class="product-image">
      <img
        :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id"
        alt="Car"
      />
      <br />
      <div class="car-details">
        <h3>About our {{ car.name }}</h3>
        <br />
        <b class="description">{{ car.description }}</b>
      </div>
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
h3 {
  margin-top: 10px;
  font-size: 2.625rem;
  font-weight: bold;
}
.car-details {
  text-align: left;
  font-family: AvenirLTStd-Black;
}
.product-image img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin-top: 50px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
}
.description {
  font-size: 1.35rem;
  color: #828282;
  padding: 0;
  line-height: 1.6;
  margin-top: 10px;
}
</style>
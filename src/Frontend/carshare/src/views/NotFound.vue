<template>
  <div class="notfound">
    <div class="gobacktext">
      <a href="javascript:history.back()">Go Back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.notfound {
  margin-top: 0;
  padding: 0;
  text-align: center;
  background: url("../assets/img/NotFound.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 1100px;
  background-position: 100% 50%;
}
.gobacktext {
  padding-top: 300px;
  font-size: 30px;
}
</style>
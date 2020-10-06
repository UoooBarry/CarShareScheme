<!-- @Author Yongqian Huang, created at 20/08/2020
 -->
<template>
  <a
    id="back-to-top"
    href="#"
    class="btn btn-light btn-lg back-to-top"
    role="button"
    v-on:click="topFunction()"
  >
    <font-awesome-icon icon="arrow-up" />
  </a>
</template>

<script>
export default {
  name: "BackToTop",
  methods: {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
#back-to-top {
  display: block;
  position: fixed;
  bottom: 20px;
  left: 30px;
  z-index: 99999;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.15);
  color: black;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}
</style>
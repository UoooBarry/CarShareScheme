<!-- @Author Yongqian huang 08/2020 -->
<template>
  <div>
    <div class="description" :class="desClass">
      <h1>{{ title }}</h1>
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parralax",
  props: ["title", "description", "desClass"]
};
</script>


<style scoped>



</style>
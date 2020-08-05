<template>
  <div>
    <BlueHeader />
  </div>
</template>

<script>
import BlueHeader from "@/components/layouts/BlueHeader.vue";

export default {
  name: "Home",
  components: {
    BlueHeader,
  },
};
</script>

<style scoped>
header#header {
  display: none !important;
}
</style>
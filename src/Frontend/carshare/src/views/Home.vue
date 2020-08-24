<template>
  <div>
    <Introduction />
  </div>
</template>

<script>

import Introduction from '@/components/Home/Introduction';
export default {
  name: "Home",
  components: {

    Introduction
  },
};
</script>

<style scoped>
header#header {
  display: none !important;
}
</style>
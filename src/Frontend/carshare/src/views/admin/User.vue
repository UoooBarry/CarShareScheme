<template>
  <div>
    <AdminHeader />
    <div class="container">
      USER LIST PAGE
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/layouts/AdminHeader.vue";

export default {
  name: "User",
  components: {
    AdminHeader
  },
};
</script>

<style>
header#header {
  display: none !important;
}
#dark-footer {
    display: none !important;
}

.main{
    height: 930px;
}
</style>
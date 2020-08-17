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
  data() {
    return {
      customers: ""
    };
  },
  async created(){  
    const response = await this.$axios.get(`http://localhost:4000/api/admin/customers`);
    this.customers = response.data.customer;
    console.log(this.customers);
    
  }
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
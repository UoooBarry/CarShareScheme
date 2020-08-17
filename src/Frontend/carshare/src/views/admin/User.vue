<template >
  <div>
    <AdminHeader />
    <div class="container">
      <h1>USER LIST PAGE</h1>
      <div class="user">
        <div class="item">first name </div>
        <div class="item">family name </div>
        <div class="item">date of birth</div>
        <div class="item">contact number</div>
        <div class="item">created at </div>
        <div class="item">updated at </div>
      </div>
      <div v-for="customer in customers" v-bind:key="customer.id" class="user">
        <div class="item">{{ customer.first_name }}</div>
        <div class="item">{{ customer.family_name }}</div>
        <div class="item">{{ customer.date_of_birth === null? "null" : customer.date_of_birth }}</div>
        <div class="item">{{ customer.contact_number }}</div>
        <div class="item">{{ customer.createdAt }}</div>
        <div class="item">{{ customer.updatedAt }}</div>
        
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/layouts/AdminHeader.vue";
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "User",

  components: {
    AdminHeader
  },
  mixins: [authorizeMixin],
  data() {
    return {
      customers: []
    };
  },
  async created() {
    const response = await this.$axios.get(`${this.$admin}/customers/`, {
      headers: this.header
    });
    this.customers = response.data.customers;
  }
};
</script>

<style>
.item{
  display:inline-block;
  margin:10px;
  width: 155px;
}
.user {
  padding: 20px;
  border-bottom: 1px solid black;
}
header#header {
  display: none !important;
}
#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>
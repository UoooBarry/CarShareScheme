<template >
  <div>
    <AdminHeader />
    <div class="container">
      <h1>USER LIST PAGE</h1>
      <div class="user">
        <div class="item">first name</div>
        <div class="item">family name</div>
        <div class="item">date of birth</div>
        <div class="item">contact number</div>
        <div class="item">created at</div>
        <div class="item">updated at</div>
        <div class="item">activate</div>
      </div>

      <div v-for="customer in customers" v-bind:key="customer.customer.id" class="user">
        <div class="item">{{ customer.customer.first_name }}</div>
        <div class="item">{{ customer.customer.family_name }}</div>
        <div
          class="item"
        >{{ customer.customer.date_of_birth === null? "null" : customer.date_of_birth }}</div>
        <div class="item">{{ customer.customer.contact_number }}</div>
        <div class="item">{{ customer.customer.createdAt | formatDate }}</div>
        <div class="item">{{ customer.customer.updatedAt | formatDate}}</div>
        <div class="item">
         
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" :id="'toggle'+customer.customer.id"/>
            <label class="custom-control-label" for="customSwitches"></label>
          </div>
        </div>
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
  methods: {
    activate() {
      this.$axios
        .patch(
          `${this.$carshare}/customers/`,
          { headers: this.header }
        )
        .then(res => {
          if (res.data.message == "fail") {
            res.data.errors.forEach(error => {
              this.flashMessage.error({
                title: "Update detail",
                message: error
              });
            });
            return;
          }

          this.flashMessage.success({
            title: "Update success!",
            message: "Update successfully!"
          });
        })
        .catch(err => console.log(err));
    }
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
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
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
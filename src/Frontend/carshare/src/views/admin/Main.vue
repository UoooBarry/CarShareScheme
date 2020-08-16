<template>
  <div>
    <AdminHeader />
    <div class="container">
      <div class="login-card">
        <img class="profile-img-card" src="@/assets/img/avatar_2x.png" />
        <p class="profile-name-card"></p>
        <h1>ADMIN</h1>
        <form class="form-signin" @submit.prevent="login">
          <span class="reauth-email"></span>
          <input
            class="form-control"
            type="email"
            id="inputEmail"
            required
            placeholder="Email address"
            v-model="email"
            autofocus
          />
          <input
            class="form-control"
            type="password"
            id="inputPassword"
            required
            placeholder="Password"
            v-model="password"
          />
          
          <button
            class="btn btn-primary btn-block btn-lg btn-signin"
            type="submit"
            style="background-color: rgb(126,184,208);"
          >Sign in</button>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/layouts/AdminHeader.vue";

export default {
  name: "Admin",
  components: {
    AdminHeader
  },
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    login() {
      this.$axios.post(`${this.$auth}/authorize`,{
        email: this.email,
        password: this.password
      })
      .then( (res) => {
        if(res.data.message === 'success'){
          localStorage.setItem('authToken', res.data.token);
          this.flashMessage.success({
            title: 'Login as Admin success',
            message: `Welcome! ${res.data.customer_name}`
          });
          this.$router.push({name: 'User'});
        }else{
          this.flashMessage.warning({
            title: 'Login fail',
            message: res.data.reason
          })
        }
      })
      .catch((err) => {
        this.flashMessage.error({
          title: 'Internal error',
          message: err
        })
      })
    }
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
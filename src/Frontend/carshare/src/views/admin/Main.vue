/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 16/08/2020                *
 * Yongqian Huang updated at: 04/10/2020 Fixed admin portal login issue*
 ***********************************************************************/
<template>
  <div>
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
export default {
  name: "Admin",
  created(){
    sessionStorage.removeItem('authToken');
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      this.$axios
        .post(`${this.$auth}/authorize`, {
          email: this.email,
          password: this.password
        })
        .then(async (res) => {
          if (res.data.message === "success") {
            this.authorize(res.data.token); //from global mixin
            
            const authRes = await this.$axios.get(`${this.$admin}/verify`, { headers: this.header});
            if (authRes.data.authorize) {
              //if the requested user is an admin   
              this.flashMessage.success({
                title: "Login as Admin success",
                message: `Welcome admin!`
              });
              this.$router.push({name: 'AdminUser'});
            } else {
              this.flashMessage.warning({
                title: "Login fail",
                message: res.data.reason
              });
            }
            
          } else {
            this.flashMessage.warning({
              title: "Login fail",
              message: res.data.reason
            });
          }
        })
        .catch(err => {
          this.flashMessage.error({
            title: "Internal error",
            message: err
          });
        });
    }
  }
};
</script>

<style>

#dark-footer {
  display: none !important;
}
.main {
  height: 930px;
}
</style>
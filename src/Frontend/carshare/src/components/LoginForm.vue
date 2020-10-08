/***********************************************************************
 *           @AUTHOR: Yongqian Huang, CREATED AT: 01/08/2020           *
*           @Update: Bach Dao     : 03/08/2020                          *
*           @Update: Dawaname Dawaname     : 01/10/2020                          *
 ***********************************************************************/
<template>
  <div class="container">
    <div class="login-card">
      <img class="profile-img-card" src="@/assets/img/avatar_2x.png" />
      <p class="profile-name-card"></p>
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
        <div class="checkbox">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="remember" v-model='remember' />
            <label class="form-check-label" for="formCheck-2">Stay Signed In</label>
          </div>
        </div>
        <button
          class="btn btn-primary btn-block btn-lg btn-signin"
          type="submit"
          style="background-color: rgb(126,184,208);"
        >Sign in</button>
      </form>
      <a class="forgot-password" href="#">Forgot your password? Click here</a>
      <a class="forgot-password" style="margin-left:15px;" href="#" v-on:click="showRegister()">Don't have an account? Sign up</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data(){
    return{
      email: '',
      password: '',
      remember: false
    }
  },
  methods:{
    showRegister() {
      document.getElementById("picture").style.display = "none";
      document.getElementById("login").style.display = "none";
      document.getElementById("register").style.display = "inline-block";
    },
    login() {
      this.$axios.post(`${this.$auth}/authorize`,{
        email: this.email,
        password: this.password
      })
      .then( (res) => {
        if(res.data.message === 'success'){
          this.authorize(res.data.token,this.remember); //from global mixin
          this.flashMessage.success({
            title: 'Login success',
            message: `Welcome! ${res.data.customer_name}`
          });
          this.$router.push({name: 'Cars'});
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
<template>
  <!-- Start: Header Blue -->
  <div>
    <!-- Start: Header -->
    <div class="header-blue parallax">
      <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PBD Car Share</a>
          <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>
      <div class="hero">
        <div class="row">
          <!-- Start: Text -->
          <div class="col-sm-5 col-md-6">
            <h1>The new car share system is there</h1>
            <p>Get your&nbsp;favorite car anytime, any where, everything as you want</p>
            <button class="btn btn-light btn-lg action-button" type="button" v-on:click="showLogin()">Get A Car Now</button>
            
          </div>
          <!-- End: Text -->
          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 phone-holder">
            <div class="container iphone-mockup" id="picture">
              <img src="../../../public/img/elephant.jpg" />
            </div>

            <div class="container iphone-mockup" >
              <LoginForm id="login" style="display: none;"/>
              <RegisterForm id="register" style="display: none;"/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- End: Header -->
  </div>
</template>

<script>
import "../../../public/css/styles.min.css";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
export default {
  name: "BlueHeader",
  components: {
    LoginForm,
    RegisterForm
  },
  methods: {
    /*When clicked the login button*/
    showLogin() {
      //Hide the picture and register, show login
      document.getElementById("picture").style.display = "none";
      document.getElementById("register").style.display = "none";
      document.getElementById("login").style.display = "inline-block";
    }
  
  },
};
</script>

<style scoped>
a.login {
  cursor: pointer;
}
</style>
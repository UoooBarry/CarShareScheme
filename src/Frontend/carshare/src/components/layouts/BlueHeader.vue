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
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav">
              <li class="nav-item" role="presentation">
                <a class="nav-link" href="#"></a>
              </li>
            </ul>
            <form class="form-inline mr-auto" target="_self">
              <div class="form-group">
                <label for="search-field"></label>
              </div>
            </form>
            <span class="navbar-text">
              <a v-on:click="showLogin()" class="login" style="cursor: pointer;">Log In</a>
            </span>
            <router-link :to="{name: 'Register'}" class="btn btn-light action-button">Sign Up</router-link>
          </div>
        </div>
      </nav>
      <div class="container hero">
        <div class="row">
          <!-- Start: Text -->
          <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <h1>The new car share system is there</h1>
            <p>Get your&nbsp;favorite car anytime, any where, everything as you want</p>
            <button class="btn btn-light btn-lg action-button" type="button">Get A Car Now</button>
          </div>
          <!-- End: Text -->
          <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
            <div class="container iphone-mockup" id="picture">
              <img src="../../../public/img/elephant.jpg" />
            </div>

            <div class="container iphone-mockup" id="login" style="display: none;">
              <LoginForm />
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

export default {
  name: "BlueHeader",
  components: {
    LoginForm,
  },
  methods: {
    showLogin() {
      document.getElementById("picture").style.display = "none";
      document.getElementById("login").style.display = "inline-block";
    },
  },
};
</script>

<style scoped>
a.login {
  cursor: pointer;
}
</style>
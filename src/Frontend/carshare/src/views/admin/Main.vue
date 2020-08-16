<template>
  <div>
    <AdminHeader />
    <div class="container">
      <div class="login-card">
        <img class="profile-img-card" src="@/assets/img/avatar_2x.png" />
        <p class="profile-name-card"></p>
        <form class="form-signin">
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
  name: "Home",
  components: {
    AdminHeader
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
    height: 1000px;
}
</style>
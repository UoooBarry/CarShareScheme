<template>
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
          autofocus
        />
        <input
          class="form-control"
          type="password"
          id="inputPassword"
          required
          placeholder="Password"
        />
        <div class="checkbox">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="formCheck-2" />
            <label class="form-check-label" for="formCheck-2">Remember me</label>
          </div>
        </div>
        <button
          class="btn btn-primary btn-block btn-lg btn-signin"
          type="submit"
          style="background-color: rgb(126,184,208);"
        >Sign in</button>
      </form>
      <a class="forgot-password" href="#">Forgot your password?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>
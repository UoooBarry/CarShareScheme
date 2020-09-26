/***********************************************************************
 *           @AUTHOR: Bach Dao, Updated AT: 13/08/2020
              Yongqian Huang Updated at 19/09/2020 Responsive and selected logic         *
 ***********************************************************************/
<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-md navbar-transparency">
      <Brand />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navcol-1"
        aria-controls="navcol-1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navcol-1">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item dropdown" id="language">
            <a
              data-toggle="dropdown"
              aria-expanded="false"
              class="dropdown-toggle nav-link"
              href="#"
            >{{ $t('lang') }}</a>
            <div class="dropdown-menu language-menu" role="menu">
              <button
                v-for="entry in languages"
                :key="entry.title"
                @click="changeLocale(entry.language)"
              >
                <flag :iso="entry.flag" v-bind:squared="false" />
                {{entry.title}}
              </button>
            </div>
          </li>
          <li
            class="nav-item"
            role="presentation"
            v-bind:class="{'nav-item active': getActive('Cars')}"
          >
            <a class="nav-link" href="/Home">{{ $t('carList') }}</a>
          </li>
          <li
            class="nav-item dropdown"
            id="account"
            v-bind:class="{'nav-item active': getActive('Profile')}"
          >
            <a
              data-toggle="dropdown"
              aria-expanded="false"
              class="dropdown-toggle nav-link"
              href="#"
            >{{ $t('account') }}</a>
            <div class="dropdown-menu" role="menu">
              <a class="dropdown-item" role="presentation" href="/user/profile">{{ $t('profile') }}</a>
              <a class="dropdown-item" role="presentation" href="/rents">{{ $t('rentHistory') }}</a>
              <a class="dropdown-item" role="presentation" href="#" v-on:click="this.logout">{{ $t('logout') }}</a>
            </div>
          </li>
          <li class="nav-item" role="presentation" id="login" style="display: none">
            <a class="nav-link" href="/login">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Brand from "@/components/layouts/Brand";
import i18n from "@/plugins/i18n";
export default {
  name: "Header",
  components: {
    Brand
  },
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "vn", language: "vn", title: "Vietnamese" },
        { flag: "cn", language: "cn", title: "Chinese" }
      ]
    };
  },
  mounted() {
    //Show login if not logged in
    if (!this.id) {
      document.getElementById("login").style.display = "inline-block";
      document.getElementById("account").style.display = "none";
    }
  },
  methods: {
    //Make the nav item activate if route name = expected input.
    getActive(expected) {
      if (expected == this.$route.name) return true;
      return false;
    },
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>


<style scoped>
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-menu {
  border: 0;
}
#navcol-1 {
  margin-right: 40px;
}
.language-menu{
    min-width: 11rem;
}
button {
  font-size: 14px;
  margin: 15px;
  border: none;
  background: transparent;
}
</style>
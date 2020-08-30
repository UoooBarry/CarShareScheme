<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-md navbar-transparency">
        <Brand />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navcol-1" aria-controls="navcol-1" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="container">
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Search</a></li>
                    <li class="nav-item" role="presentation"  v-bind:class="{'nav-item active': getActive('Cars')}"><a class="nav-link" href="/Home">Car list</a></li>
                    <li class="nav-item dropdown" id="account"  v-bind:class="{'nav-item active': getActive('Profile')}"><a data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle nav-link" href="#" >Account</a>
                        <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" role="presentation" href="/user/profile">Profile</a>
                            <a class="dropdown-item" role="presentation" href="#">Rent History</a>
                            <a class="dropdown-item" role="presentation" href="#" v-on:click="this.logout">Logout</a>
                        </div>
                    </li>
                    <li class="nav-item" role="presentation" id="login" style="display: none"><a class="nav-link" href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
import authorizeMixin from '@/mixins/authorizeMixin';
import Brand from '@/components/layouts/Brand';

export default {
  name: "Header",
  mixins: [authorizeMixin],
  components:{
      Brand
  },
  mounted() {
      //Show login if not logged in
     if(!(this.id)){
            document.getElementById('login').style.display = 'inline-block';
            document.getElementById('account').style.display = 'none';
        }
  },
  methods:{
      //Make the nav item activate if route name = expected input.
      getActive(expected) {
            if (expected == this.$route.name) return true;
            return false;
        }
  }
};
</script>


<style scoped>
.dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
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
</style>
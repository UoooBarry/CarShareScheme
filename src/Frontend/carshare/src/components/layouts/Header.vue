<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-md navbar-transparency">
        <div class="container">
            <div><a class="navbar-brand" href="/about">PBD Car Share</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Search</a></li>
                    <li class="nav-item" role="presentation"  v-bind:class="{'nav-item active': getActive('About')}"><a class="nav-link" href="#">Car list</a></li>
                    <li class="nav-item dropdown" id="account"  v-bind:class="{'nav-item active': getActive('Profile')}"><a data-toggle="dropdown" aria-expanded="false" class="dropdown-toggle nav-link" href="#" >Account</a>
                        <div class="dropdown-menu" role="menu">
                            <a class="dropdown-item" role="presentation" href="/user/profile">Profile</a>
                            <a class="dropdown-item" role="presentation" href="#">Rent History</a>
                            <a class="dropdown-item" role="presentation" href="#" v-on:click="logout">Logout</a>
                        </div>
                    </li>
                    <li class="nav-item" role="presentation" id="login" style="display: none"><a class="nav-link" href="/">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
import authorizeMixin from '@/mixins/authorizeMixin';

export default {
  name: "Header",
  mixins: [authorizeMixin],
  data() {
      return{
          id: localStorage.getItem('authToken')
      }
  },
  mounted() {
     if(!(this.id)){
            document.getElementById('login').style.display = 'inline-block';
            document.getElementById('account').style.display = 'none';
        }
  },
  methods:{
      getActive(expected) {
            if (expected == this.$route.name) return true;
            return false;
        },
      logout() {
          localStorage.removeItem('authToken');
          this.$session.remove('username');
          this.flashMessage.info({
            title: 'Logout success',
            message: `See you!`
          });
          this.$router.push({name: 'Home'});
      }
  }
};
</script>
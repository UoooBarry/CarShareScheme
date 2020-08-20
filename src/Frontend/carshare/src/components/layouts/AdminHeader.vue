<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-md navbar-transparency">
        <Brand />
        <div class="container">
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"  v-bind:class="{'nav-item active': getActive('AdminUser')}" ><a class="nav-link" href="#">User list</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Car list</a></li>
                   
                    <li class="nav-item" role="presentation" id="login" style="display: none"><a class="nav-link" href="/">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
import Brand from '@/components/Brand';

export default {
  name: "AdminHeader",
  components:{
      Brand
  },
  methods:{
       getActive(expected) {
            if (expected == this.$route.name) return true;
            return false;
        },
  }
};
</script>
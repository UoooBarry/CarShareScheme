<template>
  <div id="app">
    <FlashMessage></FlashMessage>
    <router-view class name="header"></router-view>
    <router-view class="main" name="main" />
    <DarkFooter />
  </div>
</template>


<script>
import DarkFooter from "@/components/layouts/DarkFooter.vue";

export default {
  components: {
    DarkFooter
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main{
  height: 100%;
  margin-bottom: 180px;
}
</style>

<template>
  <div id="app">
    <FlashMessage></FlashMessage>
    <router-view class name="header"></router-view>
    <router-view class="main" name="main" />
    
    <ChatBot />
    
    <DarkFooter id="dark-footer" />
  </div>
</template>


<script>
import DarkFooter from "@/components/layouts/DarkFooter.vue";
import ChatBot from "@/components/chatbot/ChatBot.vue";
export default {
  components: {
    DarkFooter,
    ChatBot
  },
  created() {
    const localToken = localStorage.getItem("authToken");
    if (localToken !== null) sessionStorage.setItem("authToken", localToken);
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;
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

</style>

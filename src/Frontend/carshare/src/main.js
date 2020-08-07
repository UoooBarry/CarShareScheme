import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import 'bootstrap';
import VueSession from 'vue-session';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../config/variables';
import FlashMessage from '@smartweb/vue-flash-message';
import { VueReCaptcha } from 'vue-recaptcha-v3'

// global variable
Vue.prototype.$axios = axios;
Vue.prototype.$auth = config.authenticationURL;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Session storage
Vue.use(VueSession);
// Flash messages
Vue.use(FlashMessage);  
//Recaptcha
Vue.use(VueReCaptcha, { siteKey: '6LcTY7sZAAAAAJeN_bq5d-F7S-I2Qq9yPTCMQmoA' })
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import 'bootstrap';
import VueSession from 'vue-session';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../config/variables';
import FlashMessage from '@smartweb/vue-flash-message';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import moment from 'moment';



//font awesome icons
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// global variable
Vue.prototype.$axios = axios;
Vue.prototype.$auth = config.authenticationURL;
Vue.prototype.$carshare = config.carshareURL;
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});
// Session storage
Vue.use(VueSession);
// Flash messages
Vue.use(FlashMessage);  
//Recaptcha
Vue.use(VueReCaptcha, { siteKey: '6LcTY7sZAAAAAJeN_bq5d-F7S-I2Qq9yPTCMQmoA',loaderOptions:{
  autoHideBadge: true
} })
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import 'bootstrap';
import VueSession from 'vue-session';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlashMessage from '@smartweb/vue-flash-message';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import moment from 'moment';
import { ToggleButton } from 'vue-js-toggle-button'
import JwPagination  from 'jw-vue-pagination'


//add paginate
Vue.component('jw-pagination', JwPagination);
//font awesome icons
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('ToggleButton', ToggleButton)
// global variable
Vue.prototype.$axios = axios;
Vue.prototype.$auth = process.env.VUE_APP_AUTH;
Vue.prototype.$carshare = process.env.VUE_APP_CARSHARE;
Vue.prototype.$admin = process.env.VUE_APP_ADMIN;
Vue.config.productionTip = false;

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

// Make a router check, required logged in when meta has requiresAuth
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('authToken') === null) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
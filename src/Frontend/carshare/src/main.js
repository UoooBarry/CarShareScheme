/**************************
 * @AUTHOR YONGQIAN HUANG *
 * @COLABORATOR BACH DAO  *
 **************************/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import VueSession from "vue-session";
import "bootstrap/dist/css/bootstrap.min.css";
import FlashMessage from "@smartweb/vue-flash-message";
import { VueReCaptcha } from "vue-recaptcha-v3";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";
import { ToggleButton } from "vue-js-toggle-button";
import JwPagination from "jw-vue-pagination";
import VueNumericInput from "vue-numeric-input";
import i18n from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";
// import authorizeMixin from '@/mixins/authorizeMixin';
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VueFbCustomerChat, {
  page_id: 102140215002493, //  change 'null' to your Facebook Page ID,
  theme_color: "#a9a0a0", // theme color in HEX
  locale: "en_US", // default 'en_US'
});

//numeric input
Vue.use(VueNumericInput);

//add paginate
Vue.component("jw-pagination", JwPagination);
//font awesome icons
library.add(fas);
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("ToggleButton", ToggleButton);
// global variable
Vue.prototype.$axios = axios;
Vue.prototype.$auth = process.env.VUE_APP_AUTH;
Vue.prototype.$carshare = process.env.VUE_APP_CARSHARE;
Vue.prototype.$admin = process.env.VUE_APP_ADMIN;
Vue.prototype.$google_api_key = process.env.VUE_APP_GOOGLE_API;
Vue.config.productionTip = false;

Vue.use(FlagIcon);
new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY hh:mm");
  }
});

// Session storage
Vue.use(VueSession);
// Flash messages
Vue.use(FlashMessage);
//Recaptcha
Vue.use(VueReCaptcha, {
  siteKey: "6LcTY7sZAAAAAJeN_bq5d-F7S-I2Qq9yPTCMQmoA",
  loaderOptions: {
    autoHideBadge: true,
  },
});

Vue.mixin({
  data() {
    return {
      header: this.getHeader(),
      id: sessionStorage.getItem("authToken"),
    };
  },
  methods: {
    getHeader() {
      const header = {
        authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      };
      return header;
    },
    logout() {
      sessionStorage.removeItem("authToken");
      localStorage.removeItem("authToken");
      this.$session.remove("username");
      this.flashMessage.info({
        title: "Logout success",
        message: "See you!",
      });
      this.$router.push({ name: "Login" });
    },
  },
});

// Make a router check, required logged in when meta has requiresAuth
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (sessionStorage.getItem("authToken") === null) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

//Global Mixin
Vue.mixin({
  methods: {
    getCarData(res) {
      let allCars = [];
      const locations = res.data.locations;
      for (const location of locations) {
        for (const car of location.Cars) {
          allCars.push(car);
        }
      }
      return allCars;
    },
  },
});

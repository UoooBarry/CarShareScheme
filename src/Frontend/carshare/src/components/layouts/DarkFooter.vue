/***********************************************************************
 *           @AUTHOR: Bach Dao, Updated AT: 13/08/2020                *
 ***********************************************************************/
<template>
  <!-- Start: Footer Dark -->
  <div class="footer-dark">
    <footer>
      <div class="container">
        <div class="row">
          <!-- Start: Services -->
          <div class="col-sm-6 col-md-3 item">
            <h3>About us</h3>
            <ul>
              <li>
                <a href="/FAQ">FAQ</a>
              </li>
              <li>
                <a href="/term">Terms and Policy</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <!-- End: Services -->
          <!-- Start: About -->
          <div class="col-sm-6 col-md-3 item">
            <h3>Others</h3>
            <ul>
              <li>
                <a href="https://rmit.instructure.com/">Rmit</a>
              </li>
              <li>
                <a
                  href="https://rmiteduau.sharepoint.com/:f:/r/sites/PP2050GroupPBD/Shared%20Documents/General?csf=1&web=1&e=svmA1s"
                >Team</a>
              </li>
              <li>
                <a href="https://github.com/UoooBarry/CarShareScheme">GitHub</a>
              </li>
            </ul>
          </div>
          <!-- End: About -->
          <!-- Start: Footer Text -->
          <div class="col-md-6 item text">
            <h3>Team PBD</h3>
            <p>This is team PBD final capstone project for renting car web base application</p>
          </div>
          <!-- End: Footer Text -->
        </div>
        <div class="social-button-group">
          <button type="button" class="btn btn-social-icon btn-facebook btn-rounded">
            <font-awesome-icon :icon="[ 'fab', 'facebook-f' ]" id="visa" />
          </button>
          <button type="button" class="btn btn-social-icon btn-youtube btn-rounded">
            <font-awesome-icon :icon="[ 'fab', 'youtube' ]" id="visa" />
          </button>
          <button type="button" class="btn btn-social-icon btn-twitter btn-rounded">
            <font-awesome-icon :icon="[ 'fab', 'twitter' ]" id="visa" />
          </button>
          <button type="button" class="btn btn-social-icon btn-linkedin btn-rounded">
            <font-awesome-icon :icon="[ 'fab', 'linkedin' ]" id="visa" />
          </button>
          <button type="button" class="btn btn-social-icon btn-instagram btn-rounded">
            <font-awesome-icon :icon="[ 'fab', 'instagram' ]" id="visa" />
          </button>
        </div>
        <!-- Start: Copyright -->
        <p class="copyright">PBD Car Share System © 2020</p>
        <!-- End: Copyright -->
      </div>
    </footer>
  </div>
  <!-- End: Footer Dark -->
</template>


<script>
import "../../../public/css/styles.min.css";

export default {
  name: "DarkFooter"
};
</script>

<style scoped>
.with-font {
  font-style: normal !important;
  font-family: "Suisseintl webm", sans-serif !important;
  font-weight: 500;
}
.social-button-group > .btn {
  margin-right: 0.5rem !important;
}

.social-button-group {
  margin-top: 3rem !important;
}
.btn.btn-social-icon {
  width: 50px;
  height: 50px;
  padding: 0;
}
.btn.btn-rounded {
  border-radius: 50px;
}
.btn-outline-facebook {
  border: 1px solid #3b579d;
  color: #3b579d;
}

.btn-outline-facebook:hover {
  background: #3b579d;
  color: #ffffff;
}

.btn-outline-youtube {
  border: 1px solid #e52d27;
  color: #e52d27;
}

.btn-outline-twitter {
  border: 1px solid #2caae1;
  color: #2caae1;
}


.btn-outline-linkedin {
  border: 1px solid #0177b5;
  color: #0177b5;
}

.btn-outline-instagram {
  border: 1px solid #dc4a38;
  color: #dc4a38;
}

.btn-outline-twitter:hover {
  background: #2caae1;
  color: #ffffff;
}

.btn-outline-linkedin:hover {
  background: #0177b5;
  color: #ffffff;
}

.btn-outline-youtube:hover {
  background: #e52d27;
  color: #ffffff;
}

.btn-outline-instagram:hover {
  background: #e52d27;
  color: #ffffff;
}

.btn-facebook {
  background: #3b579d;
  color: #ffffff;
}

.btn-youtube {
  background: #e52d27;
  color: #ffffff;
}

.btn-twitter {
  background: #2caae1;
  color: #ffffff;
}


.btn-linkedin {
  background: #0177b5;
  color: #ffffff;
}

.btn-instagram {
  background: #dc4a38;
  color: #ffffff;
}

.btn-facebook:hover,
.btn-facebook:focus {
  background: #2d4278;
  color: #ffffff;
}

.btn-youtube:hover,
.btn-youtube:focus {
  background: #c21d17;
  color: #ffffff;
}

.btn-twitter:hover,
.btn-twitter:focus {
  background: #1b8dbf;
  color: #ffffff;
}


.btn-linkedin:hover,
.btn-linkedin:focus {
  background: #015682;
  color: #ffffff;
}

.btn-instagram:hover,
.btn-instagram:focus {
  background: #bf3322;
  color: #ffffff;
}
</style>

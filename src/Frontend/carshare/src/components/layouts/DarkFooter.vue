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
              <li> <a href="/FAQ"> FAQ </a></li>
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
                <a href="https://rmiteduau.sharepoint.com/:f:/r/sites/PP2050GroupPBD/Shared%20Documents/General?csf=1&web=1&e=svmA1s">Team</a>
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
  name: "DarkFooter",
};
</script>

<style scoped>
.with-font{
  font-style: normal !important;
  font-family: 'Suisseintl webm', sans-serif !important;
  font-weight: 500;
}
</style>

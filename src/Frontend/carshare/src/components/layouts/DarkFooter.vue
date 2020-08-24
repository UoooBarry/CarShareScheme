<template>
  <!-- Start: Footer Dark -->
  <div class="footer-dark">
    <footer>
      <div class="container">
        <div class="row">
          <!-- Start: Services -->
          <div class="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>Car share</li>
              <li>
                <a href="https://github.com/UoooBarry/CarShareScheme">Development</a>
              </li>
              <li>
                <a href="http://carshare-vue-pbd.s3-website-ap-southeast-2.amazonaws.com/">Hosting</a>
              </li>
            </ul>
          </div>
          <!-- End: Services -->
          <!-- Start: About -->
          <div class="col-sm-6 col-md-3 item">
            <h3>About</h3>
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
            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
          </div>
          <!-- End: Footer Text -->
          <!-- Start: Social Icons -->
          <div class="col item social">
            <a href="#">
              <i class="icon ion-social-facebook with-font">F</i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter with-font">T</i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat with-font">S</i>
            </a>
            <a href="#">
              <i class="icon ion-social-instagram with-font">I</i>
            </a>
          </div>
          <!-- End: Social Icons -->
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

<template>
  <div class="card border-0">
    <div class="card-header card-2">
      <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">PAYMENT METHOD</p>
    </div>
      <article class="card">
        <div class="card-body p-5">
          <ul class="nav  nav-pills rounded nav-fill mb-3" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
                <i class="fa fa-credit-card"></i> Credit Card
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                <i class="fab fa-paypal"></i> Paypal
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
                <i class="fa fa-university"></i> Bank Transfer
              </a>
            </li>
          </ul>
              <hr class="my-3" />
          <div class="tab-content">
            <div class="tab-pane fade show active" id="nav-tab-card">
              <form role="form">
                <div class="form-group">
                  <label for="username">Full name (on the card)</label>
                  <input type="text" class="form-control" name="username" placeholder required />
                </div>
                <!-- form-group.// -->

                <div class="form-group">
                  <label for="cardNumber">Card number</label>
                  <div class="input-group">
                    <input type="text" class="form-control" name="cardNumber" placeholder />
                    <div class="input-group-append">
                      <span class="input-group-text text-muted">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-amex"></i>
                        <i class="fab fa-cc-mastercard"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <!-- form-group.// -->

                <div class="row">
                  <div class="col-sm-8">
                    <div class="form-group">
                      <label>
                        <span class="hidden-xs">Expiration</span>
                      </label>
                      <div class="input-group">
                        <input type="number" class="form-control" placeholder="MM" name />
                        <input type="number" class="form-control" placeholder="YY" name />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label
                        data-toggle="tooltip"
                        title
                        data-original-title="3 digits code on back side of the card"
                      >
                        CVV
                        <i class="fa fa-question-circle"></i>
                      </label>
                      <input type="number" class="form-control" required />
                    </div>
                    <!-- form-group.// -->
                  </div>
                </div>
                <!-- row.// -->
                <button class="subscribe btn btn-primary btn-block" type="button">Confirm</button>
              </form>
            </div>
            <!-- tab-pane.// -->
            <div class="tab-pane fade" id="nav-tab-paypal">
              <p>Paypal is easiest way to pay online</p>
              <p>
                <button type="button" class="btn btn-primary">
                  <i class="fab fa-paypal"></i> Log in my Paypal
                </button>
              </p>
              <p>
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-tab-bank">
              <p>Bank accaunt details</p>
              <dl class="param">
                <dt>BANK:</dt>
                <dd>THE WORLD BANK</dd>
              </dl>
              <dl class="param">
                <dt>Accaunt number:</dt>
                <dd>12345678912345</dd>
              </dl>
              <dl class="param">
                <dt>IBAN:</dt>
                <dd>123456789</dd>
              </dl>
              <p>
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <!-- tab-pane.// -->
          </div>
          <!-- tab-content .// -->
        </div>
        <!-- card-body.// -->
      </article>
      <!-- card.// -->
    </div>
    <!-- row.// -->

  <!--container end.//-->
</template>

<script>
export default {
  name: "Payment",
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>


<style scoped>
.card{
  border:none;
  margin-top: 5px;
}

.card, .card-header{
  background-color:#F8F8F8;

}
</style>  
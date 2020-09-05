<template>
  <div class="card border-0">
    <div class="card-header card-2">
      <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px"><font-awesome-icon icon="chevron-left" id="b-2-pickup" @click='lastStep'/>PAYMENT METHOD</p>
    </div>
      <article class="card">
        <div class="card-body p-5">
          <ul class="nav  nav-pills rounded nav-fill mb-3" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
                 <font-awesome-icon icon="credit-card" /> Credit Card
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                 <font-awesome-icon :icon="[ 'fab', 'paypal' ]" /> Paypal
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
                 <font-awesome-icon icon="university" /> Bank Transfer
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
                        <font-awesome-icon :icon="[ 'fab', 'cc-visa' ]" id="visa"/> 
                        <font-awesome-icon :icon="[ 'fab', 'cc-amex' ]" id="amex"/> 
                        <font-awesome-icon :icon="[ 'fab', 'cc-mastercard' ]" id="master"/>
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
                <dt>Account number:</dt>
                <dd>12345678912345</dd>
              </dl>
              <dl class="param">
                <dt>BSB:</dt>
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
  methods: {
    lastStep(){
      this.$emit('lastStep');
    }
  },
  mounted() {}
};
</script>


<style scoped>
.nav-pills .nav-link.active, .nav-pills .show>.nav-link{
  background-color: black;
}
.nav-link {
  color: black;
}
.card{
  border:none;
  margin-top: 5px;
}

.card, .card-header{
  background-color:#F8F8F8;

}
#visa,#amex{
  padding-right: 2px;
}
#b-2-pickup {
  float: left;
  margin-top: 7px;
  cursor: pointer;
}
</style>  
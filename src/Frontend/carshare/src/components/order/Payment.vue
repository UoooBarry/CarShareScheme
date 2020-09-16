
/***********************************************************************
*           @AUTHOR: Bach Dao, CREATED AT: 03/09/2020                  *
*          Shuyuan Zhang, Updated at: 03/09/2020                       *
*           Bach Dao, updated at AT: 04/09/2020                        *
*   Yongqian Huang updated at: 09/09/2020 Add payment validation       *
*Bach Dao updated at 13/09/2020 fix button payment validation          *
 ***********************************************************************/
<template>
  <div class="card border-0">
    <div class="card-header card-2">
      <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">PAYMENT METHOD</p>
    </div>
    <article class="card">
     
      <div class="card-body p-5">
        <ul class="nav nav-pills rounded nav-fill mb-3" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
              <font-awesome-icon icon="credit-card" />Credit Card
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#nav-tab-paypal">
              <font-awesome-icon :icon="[ 'fab', 'paypal' ]" />Paypal
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
              <font-awesome-icon icon="university" />Bank Transfer
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
                  <input
                    type="text"
                    class="form-control"
                    name="cardNumber"
                    id="cardNumber"
                    @change="creditCardCheck"
                    placeholder
                  />
                  <div class="input-group-append">
                    <span class="input-group-text text-muted">
                      <font-awesome-icon :icon="[ 'fab', 'cc-visa' ]" id="visa" />
                      <font-awesome-icon :icon="[ 'fab', 'cc-amex' ]" id="amex" />
                      <font-awesome-icon :icon="[ 'fab', 'cc-mastercard' ]" id="master" />
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
                      <input type="number" class="form-control" placeholder="MM" id="mm" name />
                      <input type="number" class="form-control" placeholder="YY" id="yy" name />
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
                      <font-awesome-icon icon="question-circle" id="tooltip-target-1" />
                    </label>
                    <input type="number" class="form-control" id="cvv" required />
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
      <a @click="pay">
        <CompleteOrderButton id="btn-order" />
      </a>
      
  
  </div>
  <!-- row.// -->

  <!--container end.//-->
</template>

<script>
import CompleteOrderButton from "@/components/order/CompleteOrderButton";
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "Payment",
  props: ["bill", "rent"],
  mixins: [authorizeMixin],
  components: {
    CompleteOrderButton
  },
  data() {
    return {};
  },
  methods: {
    creditCardCheck(event){
      const inputCard = event.target.value;
      const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      const masterRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
      const amexRegex = /^3[47][0-9]{13}$/;
      if(visaRegex.test(inputCard)){
        document.getElementById('visa').style.color = "black";
      }else if(masterRegex.test(inputCard)){
        document.getElementById('master').style.color = "black";
      }else if(amexRegex.test(inputCard)){
        document.getElementById('amex').style.color = "black";
      }else{
         document.getElementById('visa').style.color = "#6c757d";
        document.getElementById('master').style.color = "#6c757d";
        document.getElementById('amex').style.color = "#6c757d";
      }
    },
    verifyCreditcard(){
      let result = true;
      const creditCard = document.getElementById('cardNumber').value;
      const cvv = document.getElementById('cvv').value;
      const year = document.getElementById('yy').value;
      const month = document.getElementById('mm').value;
      const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      const expireDate = new Date(`1/${month}/${year}`);
      if(expireDate <= new Date()){
        this.flashMessage.error({
                title: "Order failed",
                message: "Credit card's expire date cannot be today or before."
          });
          result = false
      }
      
      if(!creditCardRegex.test(creditCard)){
         this.flashMessage.error({
                title: "Order failed",
                message: 'Credit card entered is not correct.'
          });
          result = false;
      }
      if(cvv == null){
        this.flashMessage.error({
                title: "Order failed",
                message: 'CVV cannot be empty.'
          });
          result = false
      }

      return result;
    },
    nextStep(){
      this.$emit('nextStep');
    },
    lastStep() {
      this.$emit("lastStep");
    },
    pay(){
      //Only pass when validation pass
      if(this.verifyCreditcard()){
        this.$axios.post(`${this.$carshare}/orders/pay`,{
          bill_id: this.bill.id,
          total: this.bill.fee //Not implment with pay api
        },{headers: this.header})
          .then((res) => {
            if (res.data.message == "fail") {
              res.data.errors.forEach(error => {
                this.flashMessage.error({
                  title: "Order failed",
                  message: error
                });
              });
              return;
            }
            
            this.flashMessage.success({
              title: "Order confrimed!",
              message: "Order payed successfully!"
            });

            const order_button = document.getElementById('order-button');
            order_button.classList.add('animate');
            order_button.disabled = true;
             setTimeout(() => {
               this.$router.push({
                name: "Receipt",
                params:{ id: this.rent.id }
                });
                
            }, 8000);


            
          });
        }
   }
  }
};
</script>


<style scoped>
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: black;
}
.nav-link {
  color: black;
}
.card {
  border: none;
  margin-top: 5px;
}

.card,
.card-header {
  background-color: #f8f8f8;
}
#visa,
#amex {
  padding-right: 2px;
}
#b-2-pickup {
  float: left;
  margin-top: 7px;
  cursor: pointer;
}
#visa,
#amex,
#master {
  font-size: 22px;
}
</style>  
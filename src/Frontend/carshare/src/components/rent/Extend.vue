/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 27/08/2020                *
 ***********************************************************************/
<template>
  <div>
    <div class="modal-backdrop" @click="close"></div>
    <div class="modal" id="modal">
      <div id="extend" class="extend">
        <h1 class="card-header">Extend your rent</h1>
        <p>
          <b>Extend for</b>
          <input type="number" v-model="period" name="day" min="1" />
          <b>Days</b>
        </p>
      </div>
      <div id="extend-payment">
        <div class="card border-0">
          <div class="card-header card-2">
            <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">PAYMENT METHOD</p>
          </div>
          <article class="card">
            <div class="card-body p-5">
              <div class="tab-content">
                <div class="tab-pane fade show active">
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
                          id="cardNumberExtend"
                          @change="creditCardCheck"
                          placeholder
                        />
                        <div class="input-group-append">
                          <span class="input-group-text text-muted">
                            <font-awesome-icon :icon="[ 'fab', 'cc-visa' ]" id="visa-extend" />
                            <font-awesome-icon :icon="[ 'fab', 'cc-amex' ]" id="amex-extend" />
                            <font-awesome-icon :icon="[ 'fab', 'cc-mastercard' ]" id="master-extend" />
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
                            <input type="number" class="form-control" placeholder="MM" id="mm-extend" name />
                            <input type="number" class="form-control" placeholder="YY" id="yy-extend" name />
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
                            <font-awesome-icon icon="question-circle"  />
                          </label>
                          <input type="number" class="form-control" id="cvv-extend" required />
                        </div>
                        <!-- form-group.// -->
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- tab-content .// -->
            </div>
            <!-- card-body.// -->
          </article>
          <!-- card.// -->
          <a @click="extend">
            <CompleteOrderButton id="btn-order-extend" />
          </a>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <h3>Payment estimate: {{(fee*this.period).toFixed(2)}}</h3>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import CompleteOrderButton from "@/components/order/CompleteOrderButton"
export default {
  mixins: [authorizeMixin],
  name: "PayNow",
  components: {
    CompleteOrderButton
  },
  props: ["rentId", "fee"],
  data() {
    return {
      period: 1,
      isVerified: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    creditCardCheck(event) {
      const inputCard = event.target.value;
      const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      const masterRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
      const amexRegex = /^3[47][0-9]{13}$/;
      if (visaRegex.test(inputCard)) {
        document.getElementById("visa-extend").style.color = "black";
      } else if (masterRegex.test(inputCard)) {
        document.getElementById("master-extend").style.color = "black";
      } else if (amexRegex.test(inputCard)) {
        document.getElementById("amex-extend").style.color = "black";
      } else {
        document.getElementById("visa-extend").style.color = "#6c757d";
        document.getElementById("master-extend").style.color = "#6c757d";
        document.getElementById("amex-extend").style.color = "#6c757d";
      }
    },
    verifyCreditcard() {
      let result = true;
      const creditCard = document.getElementById("cardNumberExtend").value;
      const cvv = document.getElementById("cvv-extend").value;
      const year = document.getElementById("yy-extend").value;
      const month = document.getElementById("mm-extend").value;
      const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      const expireDate = new Date(`1/${month}/${year}`);
      if (expireDate <= new Date()) {
        this.flashMessage.error({
          title: "Order failed",
          message: "Credit card's expire date cannot be today or before."
        });
        result = false;
      }

      if (!creditCardRegex.test(creditCard)) {
        this.flashMessage.error({
          title: "Order failed",
          message: "Credit card entered is not correct."
        });
        result = false;
      }
      if (cvv == null) {
        this.flashMessage.error({
          title: "Order failed",
          message: "CVV cannot be empty."
        });
        result = false;
      }
      return result;
    },
    extend() {
      if (this.verifyCreditcard()) {
        this.$axios
          .post(
            `${this.$carshare}/orders/extend/${this.rentId}`,
            {
              period: this.period,
              payment_total: (this.fee * this.period).toFixed(2)
            },
            { headers: this.header }
          )
          .then(res => {
            if (res.data.message == "fail") {
              this.flashMessage.error({
                title: "Order failed",
                message: res.data.errors
              });

              return;
            }

            this.flashMessage.success({
              title: "Order confirmed!",
              message: "Order confirmed successfully!"
            });
          });
      } else {
        this.flashMessage.error({
          title: "Order failed!",
          message: "Invalid credit card information!"
        });
        return;
      }
    }
  },
  mounted() {

  }
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: block;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}
.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.card,
.card-header {
  background-color: white !important;
}
#icon-close {
  cursor: pointer;
  font-size: 24px;
}
.extend {
  padding: 20px;
  padding-bottom: 0;
  text-align: center;
}
.extend p {
  font-size: 20px;
}
#day {
  margin: 30px 10px 0;
  border: 1px solid black;
  width: auto;
}
.card-header {
  text-align: center;
}
.card a {
  text-align: center;
}
</style>
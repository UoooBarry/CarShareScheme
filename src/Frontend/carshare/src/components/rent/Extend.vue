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
          <input type="number" v-model="period" name="day" min="1" @change='onPeriodChange'/>
          <b>Days</b>
        </p>
        <input type="checkbox" class="form-check-input" @change='agreeOnCharge'>
        <label class="form-check-label">Agree on continue charge from my previous payment of this rent.</label>
        <br>
        <button class="btn btn-outline-secondary btn-lg" type="button" ref='confirm' @click='extend' disabled>Confirm</button>
      </div>
      <div>
        <!-- <Payment v-on:payForExtend="extend" /> -->
        <footer class="modal-footer">
          <slot name="footer">
            <h3>Payment estimate: {{total}}</h3>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import authorizeMixin from "@/mixins/authorizeMixin";
// import Payment from "@/components/order/Payment";

export default {
  mixins: [authorizeMixin],
  name: "PayNow",
  components: {
    // Payment
  },
  props: ["rentId", "fee"],
  data() {
    return {
      period: 1,
      isVerified: false,
      total: 0
    };
  },
  methods: {
    onPeriodChange(){
      this.total = (this.fee*this.period).toFixed(2);
    },
    agreeOnCharge(){
      this.$refs.confirm.disabled = !this.$refs.confirm.disabled;
    },
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
              payment_total: this.total
            },
            { headers: this.header }
          )
          .then(() => {
            this.flashMessage.success({
              title: "Order confirmed!",
              message: "Order confirmed successfully!"
            });

            this.$router.go();
          })
          .catch(() => {
              this.flashMessage.error({
                title: "Order failed",
                message: "Incorrect Payment"
              });
            })
      } else {
        this.flashMessage.error({
          title: "Order failed!",
          message: "Invalid credit card information!"
        });
        return;
      }
    }
  },
  created(){
    this.total = (this.fee*this.period).toFixed(2);
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
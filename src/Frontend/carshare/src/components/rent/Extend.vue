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
          <input type="number" id="day" v-model="period" name="day" min="1" />
          <b>Days</b>
        </p>
      </div>
      <div id="extend-payment">
        <Payment v-on:payForExtend="extend" />
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
import Payment from "@/components/order/Payment";

export default {
  mixins: [authorizeMixin],
  name: "PayNow",
  components: {
    Payment
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
    extend(isVerified) {
      this.isVerified = isVerified;
      if (isVerified) {
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
    // document.getElementById("btn-order").style.display = "none";
    // document.getElementById("btn-order-extend").style.display = "inline-block";
    // document
    //   .getElementById("btn-order-extend")
    //   .addEventListener("click", this.extend);
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
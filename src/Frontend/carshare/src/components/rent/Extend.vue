/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 27/08/2020
*         Yongqian Huang updated at 26/09/2020 finish    extend      *
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

export default {
  mixins: [authorizeMixin],
  name: "Extend",
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
    extend() {
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
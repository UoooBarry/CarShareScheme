/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 27/08/2020                *
 ***********************************************************************/
<template>
  <div>
    <div class="modal-backdrop" @click="close"></div>
    <div class="modal" id="modal">
      <div class="extend">
        <h1>Extend your rent</h1>
        <p>
          <b>Extend for</b>
          <input type="number" id="day" v-model="period" name="day" min="1" />
          <b>Days</b>
        </p>
        <button class="btn btn-outline-dark mr-5" @click="close">Cancel</button>
        <button class="btn btn-outline-dark" @click="nextStep">Confirm to payment</button>
      </div>

      <footer class="modal-footer">
        <slot name="footer">
          <h3>Payment estimate:</h3>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
import authorizeMixin from "@/mixins/authorizeMixin";

export default {
  mixins: [authorizeMixin],
  name: "PayNow",
  components: {},
  props: ["rentId"],
  data() {
    return {
      period: 1
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    nextStep() {
      if (confirm("Are you sure extend your rent for "+ this.period + " day(s)?")) {
        this.$axios
          .post(
            `${this.$carshare}/orders/extend/${this.rentId}`,
            {
              period: this.period
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
      }
    }
  },
  created() {}
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
  text-align: left;
}
input[type="number"] {
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid black;
  width: auto;
}
</style>
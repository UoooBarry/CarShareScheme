/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 27/08/2020                *
 ***********************************************************************/
<template>
  <div>
    <div class="modal-backdrop" @click="close"></div>
    <div class="modal" id="modal">
      <Payment />
      <footer class="modal-footer">
        <slot name="footer">
          <h3>Payment estimate: ${{fee}}</h3>
        </slot>
      </footer>
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
  props: ["rentId","fee"],
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  created() {
    document.getElementById("modal").style.pointerEvents = "none";
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
  width: 40%;
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
</style>
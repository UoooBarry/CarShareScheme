<!-- @Author Yongqian Huang 11/09/2020-->
<!-- @Update Bach Dao, 16/09/2020-->
<template>
  <tr>
    <td>{{rent.id}}</td>
    <td>{{rent.start_from | formatDate}}</td>
    <td>{{rent.period}}</td>
    <td>{{rent.car.brand}} {{rent.car.model}}</td>
    <td>{{rent.car.location.address}}</td>
    <td>{{rent.user_id}}</td>
    <td>${{rent.bill.fee}}</td>
    <td>{{rent.status}}</td>
    <td>
      <div v-if="rent.status==='In progress'">
        <button class="btn btn-primary" @click="returnCar">Return Car</button>
      </div>
      <div v-if="rent.status==='Not picked' && !rent.bill.isPaid">
        <b>Pending payment</b>
      </div>
      <div v-if="rent.status==='Not picked' && rent.bill.isPaid">
        <button class="btn btn-primary" @click="pickUpCar">Pick Up Car</button>
      </div>
      <div v-if="rent.status==='Overdue'">
           <b style="color:red">Overdue</b>
      </div>
    </td>
  </tr>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "OrderRow",
  props: ["rent"],
  mixins: [authorizeMixin],
  methods: {
    returnCar() {
      this.$axios
        .patch(
          `${this.$carshare}/orders/update`,
          { rent_id: this.rent.id },
          {
            headers: this.header
          }
        )
        .then(res => {
          if (res.data.message == "fail") {
            this.flashMessage.error({
              title: "Update detail",
              message: res.data.err
            });
            return;
          }

          this.flashMessage.success({
            title: "Update success!",
            message: "Update successfully!"
          });

          this.rent.status = "Completed";
        });
    },
    pickUpCar() {
      this.$axios
        .patch(
          `${this.$carshare}/orders/update`,
          { rent_id: this.rent.id },
          {
            headers: this.header
          }
        )
        .then(res => {
          if (res.data.message == "fail") {
            this.flashMessage.error({
              title: "Update detail",
              message: res.data.err
            });
            return;
          }

          this.flashMessage.success({
            title: "Update success!",
            message: "Update successfully!"
          });

          this.rent.status = "In progress";
        });
    }
  }
};
</script>
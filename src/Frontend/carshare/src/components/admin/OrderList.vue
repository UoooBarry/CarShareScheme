<!-- @Author Yongqian Huang 11/09/2020-->
<template>
    <div>
        <div class='order-list-title'>ORDER LIST</div>
        <hr class='user'>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Rent id</th>
                    <th scope="col">Start from</th>
                    <th scope="col">Period</th>
                    <th scope="col">Car</th>
                    <th scope="col">Location</th>
                    <th scope="col">User id</th>
                    <th scope="col">Fee</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="rent in rents" v-bind:key="rent.id">
                <OrderRow v-bind:rent="rent" />
            </tbody>
        </table>
    </div>
</template>

<script>
import OrderRow from '@/components/admin/OrderRow';
export default {
    name: 'Order',
    props: ['rents'],
    components:{
        OrderRow
    }
}
</script>

<style scoped>
hr.user{
  margin-top: 5px;
  margin-bottom: 5px;
}

.car-list-title{
  text-align: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
.user {
  padding-left: 20px;
}
header#header {
  display: none !important;
}
#dark-footer {
  display: none !important;
}

.main {
  height: 9
}
</style>
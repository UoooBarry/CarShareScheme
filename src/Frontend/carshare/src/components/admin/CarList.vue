<!-- @Author Yongqian Huang 29/08/2020!-->
<template>
    <div>
        <div class='car-list-title'>CAR LIST</div>
        <hr class='user'>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Addons</th>
                    <th scope="col">Seats</th>
                    <th scope="col">Luggages</th>
                    <th scope="col">Doors</th>
                    <th scope="col">Price</th>
                    <th scope="col">Avalible</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Updated at</th>
                    <th scope="col">Viewed</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="car in cars" v-bind:key="car.id">
                <CarRow v-bind:car="car" />
            </tbody>
        </table>
    </div>
</template>

<script>
import CarRow from './CarRow';
export default {
    name: 'CarList',
    components: {
        CarRow
    },
    props: ['cars']
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
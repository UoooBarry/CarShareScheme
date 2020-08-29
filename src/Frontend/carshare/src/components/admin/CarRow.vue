<template>
    <div>
        <input type="text" class='item' :value="car.car.name">
        <input type="text" class='item' :value="car.car.brand">
        <input type="text" class='item' :value="car.car.model">
        <input type="text" class='date' :value="car.car.purchase_date">
        <input type="text" class='number' :value="car.car.seats">
        <input type="text" class='number' :value="car.car.luggages">  
        <input type="text" class='number' :value="car.car.doors">
        <input type="text" class='number' :value="car.car.price">
        <input type="text" class='number' :value="car.car.addons">
        <div class='item'>{{ car.car.createdAt | formatDate }}</div>
        <div class='item'>{{ car.car.updatedAt | formatDate }}</div>
        <div class='item'>{{ car.car.viewed }}</div>
    </div>
</template>

<script>
export default {
    props: ['car']
}
</script>

<style scoped>
    .item {
        display: inline-block;
        margin: 10px;
        width: 125px;
    }
</style>
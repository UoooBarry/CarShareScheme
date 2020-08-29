<template>
    <tr>
        <td>
            <input type="text" class='form-control' :value="car.name">
        </td>
        <td>
            <input type="text" class='form-control' :value="car.brand">
        </td>
        <td>
            <input type="text" class='form-control' :value="car.model">
        </td>
        <td>
            <input type="date" class='form-control' :value="car.purchase_date">
        </td>
        <td>
            <input type="number" class='form-control' :value="car.seats">
        </td>
        <td>
            <input type="number" class='form-control' :value="car.luggages">  
        </td>
        <td>
            <input type="number" class='form-control' :value="car.doors">
        </td>
        <td>
            <input type="number" class='form-control' :value="car.price">
        </td>
        <td>
            <div class='form-control'>{{ car.createdAt | formatDate }}</div>
        </td>
        <td>
            <div class='form-control'>{{ car.updatedAt | formatDate }}</div>
        </td>
        <td>
            <div class='form-control'>{{ car.viewed }}</div>
        </td>
        <td>
            <a href='#'>Patch</a>
        </td>
    </tr>
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
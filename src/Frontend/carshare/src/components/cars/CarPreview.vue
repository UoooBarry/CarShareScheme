<template>
    <div class="tip">
        Car name: {{car.name}} <br>
        Car brand: {{car.brand}} <br>
        Car model: {{car.model}}
    </div>
</template>

<script>
export default {
    name:"CarPreview",
    props: ["car"]
}
</script>

<style scoped>
.tip {
    display: block;
    border: 1px solid gray;
    background-color: antiquewhite;
    position: absolute;
    margin-left: 25px;
    margin-top: 20px;
}
</style>
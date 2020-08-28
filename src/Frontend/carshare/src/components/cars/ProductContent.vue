<template>
    <div class="product-content">
        <div class="intro">
            <a>{{ car.name }}</a>
            <h2 class="title">{{car.brand}} {{car.model}}</h2>
        </div>
        <div class="price">
            <span class="daily">Daily</span>
            <span class="amount">${{car.price}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductContent",
    props: ["car"]
}
</script>

<style scoped>
.product-content{
    margin-top: 48px;
    margin-bottom: 128px;
    float: right;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.12);
    padding: 64px;
    border-radius: 8px;
    background-color: #fff;
    box-sizing: border-box;
    text-align: left;
}
h2.title{
    font-size: 1.875rem;
    line-height: 1.25;
    letter-spacing: .125rem;
    font-family: AvenirLTStd-Black;
}
.product-content intro a{
    font-size: 1rem;
}
.product-content .price{
    margin: 16px 0;
    font-family: AvenirLTStd-Black;
    text-transform: uppercase;
    letter-spacing: .125rem;
    font-weight: 1000;
}
.daily{
    display: inline-block;
    min-width: 60px;
    margin-right: 10px;
}
</style>
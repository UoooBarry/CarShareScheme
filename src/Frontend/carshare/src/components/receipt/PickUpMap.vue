<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
    <div class='map-container'>
        <div id="map"></div>
        <div class='text-container'>
            <div class='order-confirm-text'>Your order is confirmed</div>
            <div class='recieve-text'>You'll receive an email and text when your order is ready</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PickUpMap',
    props: ['location'],
    data(){
        return{
            position: {}
        }
    },
    created(){
         this.$axios
                .get(
                    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json",
                    {
                        params: {
                            address: this.location.address,
                            key: this.$google_api_key
                        }
                    }
                )
                .then((res) => {
                    this.position = res.data.results[0].geometry.location;
                    this.initMap();
                })
    },
    methods: {
        initMap(){
            // The map, centered at Uluru
            const map = new window.google.maps.Map(
            document.getElementById('map'), {zoom: 15, center: this.position});
            // The marker, positioned at Uluru
            new window.google.maps.Marker({position: this.position, map: map});
        }
    }
}
</script>


<style scoped>
#map{
    width: 100%;
    height: 400px;
    background-color: grey;
}
.map-container{
    margin-top: 20px;
    margin-left: 20%;
    width: 60%;
    border-radius: 8px;
    border: 1px solid rgb(150, 150, 150);
}

.order-confirm-text{
    margin: 5px;
    margin-left: 10px;
    text-align: left;
    font-size: 20px;
}
.recieve-text{
    margin: 5px;
    margin-left: 10px;
    text-align: left;
    font-size: 14px;
    color: rgb(126, 126, 126);
}
</style>

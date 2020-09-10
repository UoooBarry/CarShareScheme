<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
    <div class='row'>
        <div id="map"></div>
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
    border-radius: 25px;
    border: 1px solid rgb(150, 150, 150);
    margin-left: 10%;
    width: 80%;
    height: 400px;
    background-color: grey;
}
</style>

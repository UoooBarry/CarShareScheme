<!-- Yongqian Huang created at 1/09/2020 -->
<template>
    <div class='container main'>
        <Loading />
        <h1>Nearest return location</h1>
        <LocationTable :locations='locations' />
    </div>
    
</template>

<script>
import Loading from '@/components/Loading';
import LocationTable from '@/components/locations/locationTable'
export default {
    name: 'Locations',
    data(){
        return{
            locations: [],
            address: ''
        }
    },
    components:{
        LocationTable,
        Loading
    },
    created(){
        navigator.geolocation.getCurrentPosition(position => {
                this.$axios
                    .get(
                    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json",
                    {
                        params: {
                        latlng: `${position.coords.latitude},${position.coords.longitude}`,
                        key: this.$google_api_key
                        }
                    }
                    )
                    .then(res => {
                        //Get the first result as formatted_address
                        this.address = res.data.results[0].formatted_address;
                         this.$axios.get(`${this.$carshare}/locations/location/nearest`, {
                            params:{
                                from: this.address
                            }
                            })
                            .then((res) => {
                                this.locations = res.data.locations
                            })
                    })
        });
    }
}
</script>

<style scoped>
.main{
    margin-top: 20px;
    min-height: 800px;
}
</style>
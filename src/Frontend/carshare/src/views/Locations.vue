<template>
    <div class='container'>
        <LocationTable :locations='locations' />
    </div>
    
</template>

<script>
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
        LocationTable
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
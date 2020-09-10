/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 10/09/2020 *
 **************************************************/

export default{
    name: 'LocationMixin',
    methods:{
        async getAddress(){
            let address = ''
            await navigator.geolocation.getCurrentPosition(position => {
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
                        address = res.data.results[0].formatted_address;
                    })
            });
            console.log(address);
            return Promise.resolve(address);
        }
    }
}
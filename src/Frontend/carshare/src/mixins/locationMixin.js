export default{
    name: 'Location',
    data(){
        return{
            address: ''
        }
    },
    created(){
        navigator.geolocation.getCurrentPosition((position) => {
            this.$axios.get('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json', {
                params:{
                    latlng: `${position.coords.latitude},${position.coords.longitude}`,
                    key: this.$google_api_key
                }
            })
                .then((res) => {
                    this.address = res.data.results[0].formatted_address;
                    this.$axios.get(`${this.$carshare}/cars`, {
                        params:{
                          from: this.address
                        }
                      })
                      .then(res => {
                          this.cars = this.getCarData(res);
                      })
                      .catch(err => {
                          console.log(err)
                      });
                })
        })
    }
}
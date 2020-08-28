export default  {
    name: "CarMixin",
    data() {
        return{
            sort: '',
            order: '',
            cars: [],
            searchItem: ''
        }
    },
    methods: {
        filter(item, order){
            this.sort = item;
            this.order = order;
            this.$axios.get(`${this.$carshare}/cars`,{
                params: {
                  sort: item,
                  order: order,
                  from: this.address
                }
              })
              .then((res) => {
                this.cars = this.getCarData(res);
                this.update();
              })
              .catch(err => console.log(err));
        },
        search(){
            this.$axios.get(`${this.$carshare}/cars/search`,{
              params: {
                query: this.searchItem
              }
            })
            .then((res) => {
              this.cars = res.data.cars;
              this.update();
            })
            .catch(err => console.log(err));
        },
        update(){
            this.$emit('onFilter', this.cars);
          }
    }
}
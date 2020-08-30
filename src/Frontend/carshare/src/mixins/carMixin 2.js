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
    created(){
        this.$axios.get(`${this.$carshare}/cars`)
                    .then(res => {
                        this.cars = res.data.cars
                    })
                    .catch(err => {
                        console.log(err)
                    });
    },
    methods: {
        filter(item, order){
            this.sort = item;
            this.order = order;
            this.$axios.get(`${this.$carshare}/cars`,{
                params: {
                  sort: item,
                  order: order
                }
              })
              .then((res) => {
                this.cars = res.data.cars;
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
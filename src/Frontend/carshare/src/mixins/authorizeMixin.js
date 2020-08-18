export default  {
    data() {
        return{
            header: this.getHeader()
        }
    },
    methods: {
        getHeader(){
            const header = {
                authorization: `PBD ${localStorage.getItem("authToken")}`
            };
            return header;
        },
        logout() {
            localStorage.removeItem('authToken');
            this.$session.remove('username');
            this.flashMessage.info({
              title: 'Logout success',
              message: 'See you!'
            });
            this.$router.push({name: 'Home'});
        }
    }
}
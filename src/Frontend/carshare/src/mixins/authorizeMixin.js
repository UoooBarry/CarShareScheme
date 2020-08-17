export default  {
    data() {
        return{
            header: this.getHeader()
        }
    },
    created() {
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
              message: `See you!`
            });
            this.$router.push({name: 'Home'});
        },
        checkLoggedIn(){
            if(localStorage.getItem('authToken') === null){
                this.flashMessage.info({
                    title: 'Login is requested',
                    message: `See you!`
                  });
                this.$router.push({name: 'Home'});
            }
        }
    }
}
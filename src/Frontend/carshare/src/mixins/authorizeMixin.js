/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 27/08/2020 *
 **************************************************/

export default  {
    data() {
        return{
            header: this.getHeader(),
            id: sessionStorage.getItem("authToken")
        }
    },
    methods: {
        getHeader(){
            const header = {
                authorization: `Bearer ${sessionStorage.getItem("authToken")}`
            };
            return header;
        },
        logout() {
            sessionStorage.removeItem('authToken');
            localStorage.removeItem('authToken');
            this.$session.remove('username');
            this.flashMessage.info({
              title: 'Logout success',
              message: 'See you!'
            });
            this.$router.push({name: 'Login'});
        }
    }
}
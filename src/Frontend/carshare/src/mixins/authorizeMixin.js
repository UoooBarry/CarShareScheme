/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 27/08/2020 *
 **************************************************/

export default  {
    data() {
        return{
            header: this.getHeader()
        }
    },
    methods: {
        getHeader(){
            const header = {
                authorization: `Bearer ${localStorage.getItem("authToken")}`
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
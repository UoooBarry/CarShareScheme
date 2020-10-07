/**************************************************
 * @AUTHOR YONGQIAN HUANG, CREATEED AT 27/08/2020 *
 **************************************************/

const authorizeMixin = {
    data() {
        return{
            header: this.getHeader(),
            id: sessionStorage.getItem("authToken")
        }
    },
    methods: {
        authorize(token,remember){
            if(remember) localStorage.setItem('authToken', token);
            sessionStorage.setItem("authToken", token);
            return; 
        },
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

export default authorizeMixin;
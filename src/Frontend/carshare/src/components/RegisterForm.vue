<template>
    <div class="parallax" style="margin-bottom: 60px;">
        <div class="container">
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input class="form-control" v-model="email" id="email" name="email" type="text">
                </div>

                <div class="form-group">
                    <label for="password">Password: </label>
                    <input class="form-control" v-model="password" id="password" name="password" type="password">
                </div>

                <div class="form-group">
                    <label for="retype">Retype Password: </label>
                    <input class="form-control" v-model="retype" id="retype" name="retype" type="password">
                </div>
                
                <div class="form-group">
                    <label for="first_name">First Name: </label>
                    <input class="form-control" v-model="first_name" id="first_name" name="first_name" type="text">
                </div>

                <div class="form-group">
                    <label for="family_name">Family Name: </label>
                    <input class="form-control" v-model="family_name" id="family_name" name="family_name" type="text">
                </div>
                
                
                <div class="form-group mb-3">
                    <label for="contact_number">Contact number: </label>
                    <input class="form-control" v-model="contact" id="contact" name="contact" type="number" placeholder="Put an australian conatct number start with 4" >
                    <button type="button" class="btn btn-primary float-right" id="get_code" v-on:click="get_code" > Get Validation Code </button>
                </div>
                
                <br>
                <div class="form-group">
                    <label for="validation_code">Validation code: </label>
                    <input class="form-control" v-model="validation_code" id="validation_code" name="validation_code" type="number" required>
                </div>
                <input class="btn btn-primary" type="submit" value="Register">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    methods: {
        async register() {
            await this.$recaptchaLoaded();
            const token = await this.$recaptcha('register');

            if(this.password != this.retype){
                this.flashMessage.error({title: 'Register detail', message: 'Password and retype password not matched.'});
                return;
            }
            this.$axios.post(`${this.$auth}/register`,{
                email: this.email,
                password: this.password,
                first_name: this.first_name,
                family_name: this.family_name,
                contact_number: this.contact,
                recaptcha_token: token,
                code: this.validation_code
            })
                .then( (res) => {
                    if(res.data.message == "fail"){
                        res.data.errors.forEach(error => {
                            this.flashMessage.error({title: 'Register detail', message: error});
                        });
                        return; 
                    }

                    this.flashMessage.success({title: 'Register success!', message: "Register successfully!"});
                    this.$router.push({name: "Home"});
                    
                })
                .catch(err => console.log(err));
        },
        get_code(){
            this.btn_countdown();
            const number = document.getElementById('contact').value;
            this.$axios.get(`${this.$auth}/getCode?contact_number=${number}`)
            .then((res) => {
                if(res.data.message === "success"){
                    this.flashMessage.success({title: 'Send code success!', message: res.data.description});
                }else{
                    res.data.errors.forEach(error => {
                        this.flashMessage.error({title: 'Register detail', message: error});
                    });
                }
            })
            .catch(err => console.log(err));

        },
        btn_countdown(){
            const btn = document.getElementById('get_code');
            btn.disabled = true;
            var time = 60;
            const timer = setInterval(() => {
                time --;
                btn.innerHTML = `${time}s Reamin`;
                if(time <= 0){
                    btn.disabled = false;
                    btn.innerHTML = "Get Validation Code";
                    clearInterval(timer);
                }
            }, 1000);
            
        }
    },
    data() {
        return{
            email: '',
            contact: '',
            first_name: '',
            family_name: '',
            password: '',
            retype: '',
            validation_code: ''
        }
    },
    created(){
        this.flashMessage.setStrategy('multiple');
    }
}
</script>

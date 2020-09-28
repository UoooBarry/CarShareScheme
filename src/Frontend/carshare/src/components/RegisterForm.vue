/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 11/08/2020                *
 ***********************************************************************/
<template>
  <div class="container">
    <div class="register-card">
      <div class="row justify-content-md-center">
        <div class>
          <form @submit.prevent="register" class="form">
            <legend>Sign Up</legend>
            <h4>It's free and always will be.</h4>
            <div class="row">
              <div class="col-xs-6 col-md-6">
                <input
                  v-model="first_name"
                  type="text"
                  name="firstname"
                  value
                  class="form-control input-lg"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="col-xs-6 col-md-6">
                <input
                  v-model="family_name"
                  type="text"
                  name="lastname"
                  value
                  class="form-control input-lg"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <input
              v-model="email"
              type="text"
              name="email"
              value
              class="form-control input-lg"
              placeholder="Your Email"
              required
            />
            <input
              v-model="password"
              type="password"
              name="password"
              value
              class="form-control input-lg"
              placeholder="Password"
              required
            />
            <input
              v-model="retype"
              type="password"
              name="confirm_password"
              value
              class="form-control input-lg"
              placeholder="Confirm Password"
              required
            />
            <div class="row">
              <label style="padding: 7px 0px 0px 20px">+61</label>
              <div class="col">
                <input
                  v-model="contact"
                  id="contact"
                  type="text"
                  name="phone"
                  value
                  class="form-control input-lg"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="col">
                <input
                  v-model="validation_code"
                  type="text"
                  name="validation"
                  value
                  class="form-control input-lg"
                  placeholder="4 digits validation code"
                  required
                />
              </div>
              <button
                type="button"
                class="btn btn-primary validation"
                id="get_code"
                v-on:click="get_code"
              >Get Validation Code</button>
            </div>

            <label>Birth Date</label>
            <div class="row">
              <div class="col-xs-4 col-md-4">
                <select name="month" id="month" class="form-control input-lg">
                  <option value="01">Jan</option>
                  <option value="02">Feb</option>
                  <option value="03">Mar</option>
                  <option value="04">Apr</option>
                  <option value="05">May</option>
                  <option value="06">Jun</option>
                  <option value="07">Jul</option>
                  <option value="08">Aug</option>
                  <option value="09">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
              </div>
              <div class="col-xs-4 col-md-4">
                <select name="day" id="day" class="form-control input-lg">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
              <div class="col-xs-4 col-md-4">
                <select name="year" id="year" class="form-control input-lg">
                  <option value="1935">1935</option>
                  <option value="1936">1936</option>
                  <option value="1937">1937</option>
                  <option value="1938">1938</option>
                  <option value="1939">1939</option>
                  <option value="1940">1940</option>
                  <option value="1941">1941</option>
                  <option value="1942">1942</option>
                  <option value="1943">1943</option>
                  <option value="1944">1944</option>
                  <option value="1945">1945</option>
                  <option value="1946">1946</option>
                  <option value="1947">1947</option>
                  <option value="1948">1948</option>
                  <option value="1949">1949</option>
                  <option value="1950">1950</option>
                  <option value="1951">1951</option>
                  <option value="1952">1952</option>
                  <option value="1953">1953</option>
                  <option value="1954">1954</option>
                  <option value="1955">1955</option>
                  <option value="1956">1956</option>
                  <option value="1957">1957</option>
                  <option value="1958">1958</option>
                  <option value="1959">1959</option>
                  <option value="1960">1960</option>
                  <option value="1961">1961</option>
                  <option value="1962">1962</option>
                  <option value="1963">1963</option>
                  <option value="1964">1964</option>
                  <option value="1965">1965</option>
                  <option value="1966">1966</option>
                  <option value="1967">1967</option>
                  <option value="1968">1968</option>
                  <option value="1969">1969</option>
                  <option value="1970">1970</option>
                  <option value="1971">1971</option>
                  <option value="1972">1972</option>
                  <option value="1973">1973</option>
                  <option value="1974">1974</option>
                  <option value="1975">1975</option>
                  <option value="1976">1976</option>
                  <option value="1977">1977</option>
                  <option value="1978">1978</option>
                  <option value="1979">1979</option>
                  <option value="1980">1980</option>
                  <option value="1981">1981</option>
                  <option value="1982">1982</option>
                  <option value="1983">1983</option>
                  <option value="1984">1984</option>
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                </select>
              </div>
            </div>
            <label class="radio-inline">Gender</label>
            <label class="radio-inline">
              <input type="radio" name="gender" value="Male" id="male" v-model="gender" /> Male
            </label>
            <label class="radio-inline">
              <input type="radio" name="gender" value="Female" id="female" v-model="gender" /> Female
            </label>
            <br />
            <span
              class="help-block"
            >By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
            <button
              class="btn btn-lg btn-primary btn-block signup-btn register-button"
              type="submit"
            >Create my account</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterForm1",
  methods: {
    showLogin() {
      //Hide the picture and register, show login
      document.getElementById("picture").style.display = "none";
      document.getElementById("register").style.display = "none";
      document.getElementById("login").style.display = "inline-block";
    },
    async register() {
    //   var dob = new Date(document.getElementById("year").value, document.getElementById("month").value - 1, document.getElementById("day").value); 
      var dob =
        document.getElementById("year").value +
        "-" +
        document.getElementById("month").value +
        "-" +
        document.getElementById("day").value ;
      if (this.password != this.retype) {
        this.flashMessage.error({
          title: "Register detail",
          message: "Password and retype password not matched."
        });
        return;
      }

      this.$axios
        .post(`${this.$auth}/register`, {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          family_name: this.family_name,
          contact_number: this.contact,
          code: this.validation_code,
          gender: this.gender,
          date_of_birth: dob
        })
        .then(res => {
          if (res.data.message == "fail") {
            res.data.errors.forEach(error => {
              this.flashMessage.error({
                title: "Register detail",
                message: error
              });
            });
            return;
          }

          this.flashMessage.success({
            title: "Register success!",
            message: "Register successfully!"
          });
          this.showLogin();

        })
        .catch(err => console.log(err));
    },
    get_code() {
      this.btn_countdown();
      const number = document.getElementById("contact").value;
      this.$axios
        .get(`${this.$auth}/getCode?contact_number=${number}`)
        .then(res => {
          if (res.data.message === "success") {
            this.flashMessage.success({
              title: "Send code success!",
              message: res.data.description
            });
          } else {
            res.data.errors.forEach(error => {
              this.flashMessage.error({
                title: "Register detail",
                message: error
              });
            });
          }
        })
        .catch(err => console.log(err));
    },
    btn_countdown() {
      const btn = document.getElementById("get_code");
      btn.disabled = true;
      var time = 60;
      const timer = setInterval(() => {
        time--;
        btn.innerHTML = `${time}s Reamin`;
        if (time <= 0) {
          btn.disabled = false;
          btn.innerHTML = "Get Validation Code";
          clearInterval(timer);
        }
      }, 1000);
    }
  },
  data() {
    return {
      email: "",
      contact: "",
      first_name: "",
      family_name: "",
      password: "",
      retype: "",
      validation_code: "",
      gender: ""
    };
  },
  created() {
    this.flashMessage.setStrategy("multiple");
  }
};
</script>
<style>
.validation {
  margin-right: 15px;
  height: calc(1.5em + 0.75rem + 2px);
}

#wrap {
  /* background: linear-gradient(135deg, #172a74, #21a9af);
  background-color: #184e8e; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* height: 700px; */
  /* color: #fff; */
}
legend {
  margin-top: 20px;
  /* color: #fff; */
  font-size: 30px;
  font-weight: bold;
}
.signup-btn {
  background: #79bc64;

  background-image: linear-gradient(to bottom, #79bc64, #578843);
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  text-shadow: 0px 1px 0px #898a88;
  -webkit-box-shadow: 0px 0px 0px #a4e388;
  -moz-box-shadow: 0px 0px 0px #a4e388;
  box-shadow: 0px 0px 0px #a4e388;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: solid #3b6e22 1px;
  text-decoration: none;
}

.signup-btn:hover {
  background: #79bc64;
  background-image: -webkit-linear-gradient(top, #79bc64, #5e7056);
  background-image: -moz-linear-gradient(top, #79bc64, #5e7056);
  background-image: -ms-linear-gradient(top, #79bc64, #5e7056);
  background-image: -o-linear-gradient(top, #79bc64, #5e7056);
  background-image: linear-gradient(to bottom, #79bc64, #5e7056);
  text-decoration: none;
}
.navbar-default .navbar-brand {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
.form .form-control {
  margin-bottom: 10px;
}
@media (min-width: 768px) {
  #home {
    margin-top: 50px;
  }
  #home .slogan {
    color: #0e385f;
    line-height: 29px;
    font-weight: bold;
  }
}
.radio-inline {
  padding-right: 8px;
}
.register-button{
  background: rgb(126, 184, 208);
}
.register-button:hover{
  background: rgb(55, 128, 160);
}
</style>  
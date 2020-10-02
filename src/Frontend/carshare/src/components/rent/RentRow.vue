/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 15/08/2020                *
 ***********************************************************************/
<template>
  <div class="shadow-sm p-3 mb-4 bg-white rounded">
    <div class="row bill-id">
      <a
        :href="'/receipt/' + rent.id"
        class="col-auto"
      >{{ rent.createdAt | formatDate }} - Rent ID: {{ rent.id }} - Period: {{ rent.period }} days</a>
      <div
        class="col"
        style="text-align:right; margin-right:20px"
        v-if="this.rent.status === 'In progress' && this.rent.bill.isPaid"
      >
        <a style="cursor:pointer" @click="showModal">Extend your rent</a>
        <Extend
          v-if="rent"
          v-show="isModalVisible"
          :rentId="rent.id"
          :fee="rent.car.price"
          @close="closeModal"
        />
      </div>
    </div>

    <hr class="user" />
    <div class="row">
      <div class="car-item">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + rent.car_id"
            />
          </div>
          <div class="col">
            <p class="mb-0" style="font-size: 24px; margin-top:20px">
              <b>{{rent.car.name}}</b>
            </p>
          </div>
        </div>
      </div>
      <div class="pickup-item">{{ rent.car.location.address }}</div>

      <div class="rent-table-item">
        <div v-if="this.rent.bill.isPaid">Paid</div>
        <div v-else>Unpaid</div>
      </div>
      <div class="rent-table-item">${{ rent.bill.fee }}</div>
      <div class="rent-table-item">
        <div v-if="this.rent.bill.isPaid">
          <div v-if="this.rent.status === 'In progress'">
            <a class="pay-now" href="/locations">Return</a>
          </div>
          <div v-else-if="this.rent.status === 'Wait for review'">
            <a class="pay-now collapsible" @click="showReviewBox">Review</a>
          </div>
          <div v-else>{{ rent.status }}</div>
        </div>
        <div v-else>
          <a class="pay-now" @click="showModal">Pay now</a>
          <PayNow
            v-show="isModalVisible"
            :rentId="rent.id"
            :fee="rent.bill.fee"
            :billId="rent.bill.id"
            @close="closeModal"
          />
        </div>
      </div>
      <div class="review-box" :id="reviewBox">
        <hr class="user" />
        <form @submit.prevent="submitComment">
          <label>Rating</label>
          <div class="fieldset">
            <div class="rate">
              <input
                type="radio"
                id="star5"
                name="rate"
                value="5"
                onkeydown="navRadioGroup(event)"
                v-model="stars"
                required
              />
              <label for="star5" title="5 stars">5 stars</label>
              <input
                type="radio"
                id="star4"
                name="rate"
                value="4"
                onkeydown="navRadioGroup(event)"
                v-model="stars"
              />
              <label for="star4" title="4 stars">4 stars</label>
              <input
                type="radio"
                id="star3"
                name="rate"
                value="3"
                onkeydown="navRadioGroup(event)"
                v-model="stars"
              />
              <label for="star3" title="3 stars">3 stars</label>
              <input
                type="radio"
                id="star2"
                name="rate"
                value="2"
                onkeydown="navRadioGroup(event)"
                v-model="stars"
              />
              <label for="star2" title="2 stars">2 stars</label>
              <input
                type="radio"
                id="star1"
                name="https://codepen.io/pen/rate"
                value="1"
                onkeydown="navRadioGroup(event)"
                v-model="stars"
              />
              <label for="star1" title="1 star">1 star</label>
            </div>
          </div>

          <div class="fieldset mx-3">
            <label for="reviewComments">Comments</label>
            <textarea name="reviewComments" cols="20" rows="5" v-model="comment" maxlength="200" minlength="20" required></textarea>
          </div>
          <div class="fieldset right">
            <button type="submit" class="pay-now">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PayNow from "./PayNow";
import Extend from "./Extend";
export default {
  name: "RentRow",
  components: {
    PayNow,
    Extend
  },
  props: ["rent"],
  data() {
    return {
      isModalVisible: false,
      reviewBox: "review-box-rent" + this.rent.id,
      comment: "",
      stars: 0
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showReviewBox() {
      var content = document.getElementById(this.reviewBox);
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    },
    submitComment() {
      console.log(this.stars);
      this.$axios
        .post(
          `${this.$carshare}/comments/create/${this.rent.car.id}`,
          {
            rent_id: this.rent.id,
            stars: this.stars,
            comment: this.comment
          },
          {
            headers: this.header
          }
        )
        .then(res => {
          if (res.data.message === "success") {
            this.flashMessage.success({
              title: "Comment create successfully!",
              message: "Comment create successfully"
            });
            console.log(res.data);
            this.$emit("onCommentCreate", res.data.comment); //update comment list
          } else {
            res.data.errors.forEach(error => {
              this.flashMessage.error({
                title: "Register detail",
                message: error
              });
            });
          }
        })
        .catch(() => {
          this.flashMessage.error({
            title: "Comment create fail!",
            message: "Please make sure you have login."
          });
        });
    }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
img {
  margin: 0;
}
.bill-id {
  text-align: left;
  padding-left: 30px;
}
.pay-now {
  color: #4c4c4c;
  border: 2px solid #4c4c4c;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 8px;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  letter-spacing: 1.3px;
}

/* review box */
.review-box {
  height: auto;
  width: 100%;
  display: none;
}

.review-box select,
.review-box .rate,
.review-box textarea {
  background: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: inset 0 1px 1px #e1e1e1;
  font-size: 16px;
  padding: 8px;
}
.review-box input[type="radio"] {
  box-shadow: none;
  outline: 0 !important;
}

.review-box .fieldset {
  margin-top: 20px;
}
.review-box .right {
  align-self: flex-end;
}
.review-box {
  width: 100%;
  /* background-color: #eee; */
  padding: 0 20px 26px;
  color: #333;
  overflow-y: auto;
}
.review_section h2 {
  margin: 0 0 0 6px;
}

.review-box label,
.review-box input {
  display: block;
  /* width: 100%; */
}
.review-box label {
  font-weight: bold;
  margin-bottom: 5px;
}

.review-box .rate label,
.review-box .rate input,
.review-box .rate1 label,
.review-box .rate1 input {
  display: inline-block;
}

.review-box .rate {
  /* float: left; */
  /* display: inline-block; */
  height: 36px;
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: flex-end;
}
.review-box .rate > label {
  margin-bottom: 0;
  margin-top: -5px;
  height: 30px;
}
.review-box .rate:not(:checked) > input {
  /* position: absolute; */
  top: -9999px;
  margin-left: -24px;
  width: 20px;
  padding-right: 14px;
  z-index: -10;
}
.review-box .rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
/* #star1:focus{

} */
.review-box .rate2 {
  float: none;
}
.review-box .rate:not(:checked) > label::before {
  content: "★ ";
  position: relative;
  top: -10px;
  left: 2px;
}
.review-box .rate > input:checked ~ label {
  color: #ffc700;
  /* outline: -webkit-focus-ring-color auto 5px; */
}
.review-box .rate > input:checked:focus + label,
.review-box .rate > input:focus + label {
  outline: -webkit-focus-ring-color auto 5px;
}
.review-box .rate:not(:checked) > label:hover,
.review-box .rate:not(:checked) > label:hover ~ label {
  color: #deb217;
  /* outline: -webkit-focus-ring-color auto 5px; */
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.review-box input,
.review-box textarea {
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
}
@media only screen and (min-width: 550px) {
}


</style>
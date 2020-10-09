//  Bach Dao created 2/10/2020
//  Yongqian Huang updated at 09/10/2020 redirect users
<template>
  <div class="review-box">
    <hr class="user" />
    <form @submit.prevent="submitComment">
      <label>Rating</label>
      <div class="fieldset">
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" v-model="stars" />
          <label for="star5" title="5 stars">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" v-model="stars" />
          <label for="star4" title="4 stars">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" v-model="stars" />
          <label for="star3" title="3 stars">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" v-model="stars" />
          <label for="star2" title="2 stars">2 stars</label>
          <input
            type="radio"
            id="star1"
            value="1"
            v-model="stars"
          />
          <label for="star1" title="1 star">1 star</label>
        </div>
      </div>

      <div class="fieldset mx-3">
        <label for="reviewComments">Comments</label>
        <textarea
          name="reviewComments"
          cols="20"
          rows="5"
          v-model="comment"
          maxlength="200"
          minlength="20"
          required
        ></textarea>
      </div>
      <div class="fieldset right">
        <button type="submit" class="pay-now">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ReviewBox",
  data() {
    return {
      comment: "",
      stars: 1
    };
  },
  props: ["carId", "rentId"],
  methods: {
    submitComment() {
      this.$axios
        .post(
          `${this.$carshare}/comments/create/${this.carId}`,
          {
            rent_id: this.rentId,
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
 
            this.$router.push({
                name: 'CarDetail', 
                params:{ id: this.carId}
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

<style>
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